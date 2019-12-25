import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootStack from './src/Stacks/RootStack';
import SecondStack from './src/Stacks/SecondStack';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationNativeContainer>
      <Tab.Navigator>
        <Tab.Screen name="First" component={RootStack} />
        <Tab.Screen name="Second" component={SecondStack} />
      </Tab.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;
