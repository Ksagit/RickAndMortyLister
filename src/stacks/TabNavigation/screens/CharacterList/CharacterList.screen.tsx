import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useMemo, useState} from 'react';
import {styles} from './CharacterList.styled';
import {useCharactersQuery} from '../../../../queries';
import {CharacterCard} from '../../../../comoponents/CharacterCard';
import {Character} from '../../../../schemas';
import {SearchBar} from '../../../../comoponents/SearchBar';

const CharacterListScreen = () => {
  const [search, setSearch] = useState('');

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useCharactersQuery();

  const characters = data?.pages.flatMap(page => page.results) || [];

  const filteredCharacters = useMemo(() => {
    if (!search) {
      return characters;
    }
    const lowerCaseSearch = search.toLowerCase();
    return characters.filter(character =>
      character.name.toLowerCase().includes(lowerCaseSearch),
    );
  }, [characters, search]);

  const handleLike = (character: Character) => {
    console.log(`Liked: ${character.name}`);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Characters</Text>
      </View>
      <SearchBar search={search} setSearch={setSearch} />
      <FlatList
        style={{width: '100%'}}
        data={filteredCharacters}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CharacterCard character={item} onLike={handleLike} />
        )}
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          isFetchingNextPage ? (
            <View style={styles.footer}>
              <ActivityIndicator size="small" />
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default CharacterListScreen;
