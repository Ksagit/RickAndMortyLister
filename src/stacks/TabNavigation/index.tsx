import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {colors} from '../../utils';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: colors.primary},
        tabBarActiveTintColor: colors.white,
      }}>
      <Tab.Screen
        name="ALL CHARACTERS"
        component={CharacterListScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LIKED CHARACTERS"
        component={FavoriteCharactersScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="star" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
