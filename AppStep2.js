import { BrPage, BrPageContext } from '@bloomreach/react-sdk';
import { TYPE_CONTAINER_ITEM_UNDEFINED } from '@bloomreach/spa-sdk';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ComponentInfoCard = () => {
  const component = React.useContext(BrComponentContext);
  return <Text>I'm a {component.getName()} component</Text>;
};

const HomeScreen = ({ navigation }) => {
  const configuration = {
    endpoint:
      'https://developers.bloomreach.io/delivery/site/v1/channels/brxsaas/pages',
    httpClient: axios,
    path: '/',
    debug: true,
  };

  const mapping = {
    [TYPE_CONTAINER_ITEM_UNDEFINED]: ComponentInfoCard,
  };

  return (
    <BrPage configuration={configuration} mapping={mapping}>
      <BrPageContext.Consumer>
        {(page) => console.log('page model', page)}
      </BrPageContext.Consumer>
      <View style={styles.container}>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
        />
      </View>
    </BrPage>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>This is {route.params.name}'s profile.</Text>
    </View>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name='Profile' component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
