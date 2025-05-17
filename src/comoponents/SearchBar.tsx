import {StyleSheet, Text, TextInput, View} from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export const SearchBar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (search: string) => void;
}) => {
  return (
    <View style={styles.searchContainer}>
      <Feather name="search" size={18} color="black" />
      <TextInput
        value={search}
        onChangeText={newSearch => setSearch(newSearch)}
        placeholder="Search the characters"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    width: '92%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    gap: 5,
    marginBottom: 10,
  },
});
