import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {useCharactersQuery} from '../../../../queries';
import {CharacterCard} from '../../../../comoponents/CharacterCard';
import {Character} from '../../../../schemas';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useCharactersQuery();

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

  const characters = data?.pages.flatMap(page => page.results) || [];

  const handleLike = (character: Character) => {
    console.log(`Liked: ${character.name}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={characters}
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
              <Text style={styles.footerText}>Loading more...</Text>
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default CharacterListScreen;
