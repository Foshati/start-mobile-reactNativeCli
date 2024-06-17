// HomeScreen.js
import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-red-600">Hello fa</Text>
      <Ionicons name={'arrow-back-outline'} size={25} color={'red'} />
    </View>
  );
};

export default HomeScreen;

// style={{margin: 20, color: 'red'}}
