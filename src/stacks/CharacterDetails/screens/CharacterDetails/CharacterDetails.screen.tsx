import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './CharacterDetails.styled';
import {useCharactersQuery} from '../../../../queries';
import {RouteProp, useRoute} from '@react-navigation/native';
import {CharacterDetailsStackParamList} from '../../CharacterDetails.routes';
import {Character, InfoType} from '../../../../schemas';

type CharacterDetailsScreenRouteProp = RouteProp<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

const CharacterDetailsScreen = () => {
  const {data} = useCharactersQuery();
  const route = useRoute<CharacterDetailsScreenRouteProp>();
  const {characterId} = route.params;

  const findCharacterById = (
    pages: {info: InfoType; results: Character[]}[] | undefined,
    id: number,
  ): Character | undefined => {
    if (!pages) {
      return undefined;
    }
    for (const page of pages) {
      const foundCharacter = page.results.find(
        character => character.id === id,
      );
      if (foundCharacter) {
        return foundCharacter;
      }
    }
    return undefined;
  };

  const character = findCharacterById(data?.pages, characterId);

  return (
    <View style={styles.container}>
      <Text>{character?.name}</Text>
      <Text>{character?.status}</Text>
      <Text>{character?.origin.name}</Text>
      <Text>{character?.species}</Text>
      <Text>{character?.gender}</Text>
    </View>
  );
};

export default CharacterDetailsScreen;
