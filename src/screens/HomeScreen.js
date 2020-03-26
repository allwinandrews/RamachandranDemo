import React, {useEffect} from 'react';
import {Button, SafeAreaView} from 'react-native';

import AppLayout from '../components/layout/AppLayout';

export default function HomeScreen({navigation}) {
  useEffect(() => {
    navigation.openDrawer();
  }, []);

  return (
    <AppLayout navigation={navigation} name="Home">
      <SafeAreaView>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications">
          Go to notifications
        </Button>
      </SafeAreaView>
    </AppLayout>
  );
}
