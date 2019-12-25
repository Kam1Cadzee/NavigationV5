import React from 'react';
import {View, Button, Text} from 'react-native';

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Second', {
            screen: 'Details',
            params: {
              itemId: -1,
              otherParam: 'otherParam -1',
            },
          })
        }
      />
    </View>
  );
}

export default SettingsScreen;
