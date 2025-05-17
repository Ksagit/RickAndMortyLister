import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

export const SearchBar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (search: string) => void;
}) => {
  return (
    <View style={styles.searchContainer}>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Feather name="search" size={18} color="black" />
        <TextInput
          value={search}
          onChangeText={newSearch => setSearch(newSearch)}
          placeholder="Search the characters"
        />
      </View>
      {search ? (
        <TouchableOpacity onPress={() => setSearch('')}>
          <Entypo name="cross" size={20} color="black" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '92%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
});
