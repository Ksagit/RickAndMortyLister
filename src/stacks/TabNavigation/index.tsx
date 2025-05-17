import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#224229'},
        tabBarActiveTintColor: '#FFFFFF',
      }}>
      <Tab.Screen
        name="ALL CHARACTERS"
        component={CharacterListScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="user-alt" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="LIKED CHARACTERS"
        component={FavoriteCharactersScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name="star" size={20} color="white" />,
        }}
      />
    </Tab.Navigator>
  );
};
