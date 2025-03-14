import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// You can use icons from a library like react-native-vector-icons
// For now, we'll use text labels only

const Tab = createBottomTabNavigator();

function TabNavigator(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0080ff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
        headerStyle: {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
        headerTintColor: isDarkMode ? Colors.white : Colors.black,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          title: 'Profile',
        }}
      />
      <Tab.Screen 
        name="WelcomeScreen" 
        component={WelcomeScreen} 
        options={{
          title: 'Welcome',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;