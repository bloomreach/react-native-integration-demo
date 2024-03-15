import { BrComponentContext } from '@bloomreach/react-sdk';
import React from 'react';
import { Text } from 'react-native';

const ComponentInfoCard = () => {
  const component = React.useContext(BrComponentContext);
  return <Text>I'm a {component.getName()} component</Text>;
};

export default ComponentInfoCard;
