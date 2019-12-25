import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from '../Screens/SettingsScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const {Navigator, Screen} = createStackNavigator();

const RootStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile Title',
        }}
      />
      <Screen
        name="Settings"
        component={SettingsScreen}
        options={({route, navigation}) => {
          return {
            title: 'Settings Title',
          };
        }}
      />
    </Navigator>
  );
};

export default RootStack;
