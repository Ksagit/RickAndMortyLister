import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
  },
  link: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#1A4D2E',
    fontSize: 16,
  },
  card: {
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: '100%',
    elevation: 5,
    borderColor: '#1A4D2E',
    borderRightWidth: 6,
    borderBottomWidth: 6,
    alignSelf: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    aspectRatio: 1,
  },
  characterImage: {
    borderRadius: 20,
    borderWidth: 2,
    width: '85%',
    height: '85%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
  },
  nameLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  characterName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A4D2E',
    marginBottom: 20,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    padding: 10,
    width: '48%',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 10,
    color: '#8E8E93',
    marginBottom: 2,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3A3A3C',
  },
  likedButton: {
    backgroundColor: '#1A4D2E',
    borderRadius: 25,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likedButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
