import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default function AppLayout(props) {
  const {children, name} = props;

  return (
    <SafeAreaView>
      <Text>{name}</Text>
      {children}
    </SafeAreaView>
  );
}
