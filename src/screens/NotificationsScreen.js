import React from 'react';
import {Button, SafeAreaView} from 'react-native';

import AppLayout from '../components/layout/AppLayout';

export default function NotificationsScreen({navigation}) {
  return (
    <AppLayout navigation={navigation} name="Notifications">
      <SafeAreaView>
        <Button onPress={() => navigation.goBack()} title="Go back home">
          Go back home
        </Button>
      </SafeAreaView>
    </AppLayout>
  );
}
