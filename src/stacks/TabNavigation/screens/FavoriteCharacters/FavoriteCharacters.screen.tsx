import {useFavorites} from '../../../../comoponents/providers/FavouriteContext';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {CharacterCard} from '../../../../comoponents/CharacterCard';
import {styles} from './FavoriteCharacters.styled';
import {SearchBar} from '../../../../comoponents/SearchBar';
import {useMemo, useState} from 'react';

const FavoriteCharactersScreen = () => {
  const [search, setSearch] = useState('');
  const {favoritedCharacters} = useFavorites();

  const filteredFavoritedCharacters = useMemo(() => {
    if (!search) {
      return favoritedCharacters;
    }
    const lowerCaseSearch = search.toLowerCase();
    return favoritedCharacters.filter(character =>
      character.name.toLowerCase().includes(lowerCaseSearch),
    );
  }, [favoritedCharacters, search]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Favorite Characters</Text>
      </View>
      <SearchBar search={search} setSearch={setSearch} />
      {favoritedCharacters.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No liked characters yet!</Text>
        </View>
      ) : (
        <FlatList
          style={{width: '100%'}}
          data={filteredFavoritedCharacters}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CharacterCard character={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default FavoriteCharactersScreen;
