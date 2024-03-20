import { BrComponent, BrPage, BrPageContext } from '@bloomreach/react-sdk';
import { TYPE_CONTAINER_ITEM_UNDEFINED } from '@bloomreach/spa-sdk';
import axios from 'axios';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import ComponentInfoCard from '../components/ComponentInfoCard';
import TitleAndText from '../components/TitleAndText';

const HomeScreen = ({ navigation }) => {
  const configuration = {
    endpoint:
      'https://developers.bloomreach.io/delivery/site/v1/channels/brxsaas/pages',
    httpClient: axios,
    path: '/',
    debug: true,
  };

  const mapping = {
    TitleAndText,
    [TYPE_CONTAINER_ITEM_UNDEFINED]: ComponentInfoCard,
  };

  return (
    <BrPage configuration={configuration} mapping={mapping}>
      <BrPageContext.Consumer>
        {(page) => console.log('page model', page)}
      </BrPageContext.Consumer>
      <View style={styles.container}>
        <BrComponent path='main' />
        <Button
          title="Go to Jane's profile"
          onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
        />
      </View>
    </BrPage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
