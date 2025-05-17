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

export const CharacterCard = ({
  character,
  onLike,
}: {
  character: Character;
  onLike: (character: Character) => void;
}) => {
  const navigation = useNavigation(); // Get the navigation object from the current context (Tab Navigator)

  const handleViewDetails = () => {
    // Get the parent navigator's navigation object
    const parentNavigation = navigation.getParent<MainStackNavigationProp>();

    if (parentNavigation) {
      // Use the parent navigator to navigate to the CharacterDetailsStack screen
      parentNavigation.navigate(MainStackRoutes.CharacterDetailsStack, {
        screen: CharacterDetailsStackRoutes.CharacterDetailsScreen, // The screen INSIDE the CharacterDetailsStack
        params: {characterId: character.id}, // Parameters for CharacterDetailsScreen
      });
    } else {
      console.warn('Could not get parent navigator for navigation.');
      // Handle the case where there's no parent navigator (e.g., if CharacterCard is used outside the tab stack)
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
          onPress={() => onLike(character)}>
          <Text style={styles.likeButtonText}>LIKE</Text>
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
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#2c3e50',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    color: '#6b7280',
    fontWeight: '500',
    marginBottom: 2,
  },
  value: {
    fontSize: 18,
    color: '#1f2937',
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
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  likeButtonText: {
    color: '#4b5563',
    fontWeight: '600',
    fontSize: 14,
  },
});
