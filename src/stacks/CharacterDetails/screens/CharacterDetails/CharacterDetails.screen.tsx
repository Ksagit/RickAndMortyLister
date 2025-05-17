import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './CharacterDetails.styled';
import {useCharactersQuery} from '../../../../queries';
import {RouteProp, useRoute} from '@react-navigation/native';
import {CharacterDetailsStackParamList} from '../../CharacterDetails.routes';

type CharacterDetailsScreenRouteProp = RouteProp<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

const CharacterDetailsScreen = () => {
  const {data} = useCharactersQuery();
  const route = useRoute<CharacterDetailsScreenRouteProp>();
  const {characterId} = route.params;

  return (
    <View style={styles.container}>
      <Text>{characterId}</Text>
    </View>
  );
};

export default CharacterDetailsScreen;
