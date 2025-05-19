import {Image, Text, View, TouchableOpacity} from 'react-native';
import {useCharactersQuery} from '../../../../queries';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {CharacterDetailsStackParamList} from '../../CharacterDetails.routes';
import {Character, InfoType} from '../../../../schemas';
import {styles} from './CharacterDetails.styled';

type CharacterDetailsScreenRouteProp = RouteProp<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

const CharacterDetailsScreen = () => {
  const {data} = useCharactersQuery();
  const route = useRoute<CharacterDetailsScreenRouteProp>();
  const {characterId} = route.params;
  const navigation = useNavigation();

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

  if (!character) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Character not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.link} onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>
          {'\u2190'} Go back to Character List
        </Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: character.image}}
            style={styles.characterImage}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.nameLabel}>NAME</Text>
          <Text style={styles.characterName}>{character.name}</Text>

          <View style={styles.infoGrid}>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>STATUS</Text>
              <Text
                style={styles.infoValue}
                numberOfLines={1}
                ellipsizeMode="tail">
                {character.status}
              </Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>ORIGIN</Text>
              <Text
                style={styles.infoValue}
                numberOfLines={1}
                ellipsizeMode="tail">
                {character.origin.name}
              </Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>SPECIES</Text>
              <Text
                style={styles.infoValue}
                numberOfLines={1}
                ellipsizeMode="tail">
                {character.species}
              </Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>GENDER</Text>
              <Text
                style={styles.infoValue}
                numberOfLines={1}
                ellipsizeMode="tail">
                {character.gender}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.likedButton}>
            <Text style={styles.likedButtonText}>ADD TO LIKED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CharacterDetailsScreen;
