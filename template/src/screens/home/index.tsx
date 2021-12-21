import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Screen, View, Text} from 'components';

export const Home = () => {
  return (
    <Screen>
      <View flex={1} alignItems="center" justifyContent="center">
        <Text variant="body">Home</Text>
        <Icon name="rocket" size={30} color="#900" />
        <Button
          label="GO"
          onPress={() => console.log('Pressed')}
          variant="secondary"
        />
      </View>
    </Screen>
  );
};
