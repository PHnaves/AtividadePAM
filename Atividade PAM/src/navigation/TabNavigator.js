import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Carrinho from '../screens/Carrinho';
import Lista from '../screens/Lista';
import Pesquisa from '../screens/Pesquisa';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#7785DB',
        tabBarInactiveTintColor: '#ccc',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Carrinho':
              iconName = 'cart';
              break;
            case 'Lista':
              iconName = 'list';
              break;
            case 'Pesquisa':
              iconName = 'search';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
      <Tab.Screen name="Lista" component={Lista} />
      <Tab.Screen name="Pesquisa" component={Pesquisa} />
    </Tab.Navigator>
  );
}
