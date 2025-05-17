import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Character} from '../schemas';

type CharacterCardProps = {
  character: Character;
  onLike?: (character: Character) => void;
};

export const CharacterCard = ({character, onLike}: CharacterCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>NAME</Text>
          <Text style={styles.value}>{character.name}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>STATUS</Text>
          <Text style={styles.value}>{character.status}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>SPECIES</Text>
          <Text style={styles.value}>{character.species}</Text>
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
          onPress={() => onLike?.(character)}>
          <Text style={styles.likeButtonText}>★ LIKE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Get screen width to calculate card dimensions
const {width} = Dimensions.get('window');
const cardWidth = width - 32; // Full width minus margins
const cardHeight = 160; // Fixed height for the card

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
    width: '50%',
    height: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
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
