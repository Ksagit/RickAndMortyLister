import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: colors.white,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  headerText: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
  },
});
