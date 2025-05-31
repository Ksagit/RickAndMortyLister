import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.greenBackground,
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
  footer: {
    padding: 16,
    alignItems: 'center',
  },
});
