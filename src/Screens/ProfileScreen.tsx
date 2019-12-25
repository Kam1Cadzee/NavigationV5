import React from 'react';
import {View, Button, Text} from 'react-native';
import {useFocusEffect, useRoute} from '@react-navigation/native';

function ProfileScreen({navigation}) {
  const route = useRoute();

  useFocusEffect(() => {
    console.log('focus');

    return () => {
      console.log('blur');
    };
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </View>
  );
}

export default ProfileScreen;
