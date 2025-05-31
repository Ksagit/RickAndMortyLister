import {useNavigation} from '@react-navigation/native';
import {Character} from '../schemas';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {CharacterDetailsStackRoutes} from '../stacks/CharacterDetails/CharacterDetails.routes';
import {
  MainStackNavigationProp,
  MainStackRoutes,
} from '../stacks/Main/Main.routes';
import {colors} from '../utils';
import {useFavorites} from './providers/FavouriteContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const CharacterCard = ({character}: {character: Character}) => {
  const navigation = useNavigation();
  const {isFavorited, addFavorite, removeFavorite} = useFavorites();

  const favorited = isFavorited(character.id);

  const handleFavoriteToggle = () => {
    if (favorited) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  const handleViewDetails = () => {
    const parentNavigation = navigation.getParent<MainStackNavigationProp>();

    if (parentNavigation) {
      parentNavigation.navigate(MainStackRoutes.CharacterDetailsStack, {
        screen: CharacterDetailsStackRoutes.CharacterDetailsScreen,
        params: {characterId: character.id},
      });
    } else {
      console.warn('Could not get parent navigator for navigation.');
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => handleViewDetails()}>
      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>NAME</Text>
          <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">
            {character.name}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>STATUS</Text>
          <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">
            {character.status}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>SPECIES</Text>
          <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">
            {character.species}
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: character.image}}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.likeButton}
          onPress={handleFavoriteToggle}>
          <FontAwesome
            name={favorited ? 'star' : 'star-o'}
            size={24}
            color={favorited ? 'gold' : 'gray'}
          />
          <Text style={styles.likeButtonText}> LIKE</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const {width} = Dimensions.get('window');
const cardWidth = width - 32;
const cardHeight = 160;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    height: cardHeight,
    width: cardWidth,
  },
  infoSection: {
    width: '50%',
    padding: 16,
    justifyContent: 'center',
  },
  infoItem: {
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: colors.grayText,
    fontWeight: '500',
    marginBottom: 2,
  },
  value: {
    fontSize: 18,
    color: colors.black,
    fontWeight: '600',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '100%',
    position: 'relative',
  },
  image: {
    width: '80%',
    height: '80%',
    borderWidth: 1,
    borderRadius: 20,
  },
  likeButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderWidth: 1,
    backgroundColor: colors.greenBackground,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.white,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  likeButtonText: {
    color: colors.grayText,
    fontWeight: '600',
    fontSize: 14,
  },
});
