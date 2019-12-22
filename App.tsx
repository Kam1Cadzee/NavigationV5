import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationNativeContainer} from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}


function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home 2',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Details 2',
          }}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;
