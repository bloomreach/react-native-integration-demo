import { BrComponentContext, BrPageContext } from '@bloomreach/react-sdk';
import { getContainerItemContent } from '@bloomreach/spa-sdk';
import React from 'react';
import { Text, View } from 'react-native';

const TitleAndText = () => {
  const component = React.useContext(BrComponentContext);
  const page = React.useContext(BrPageContext);

  const {
    titlesize = 'H3',
    textalignment = 'center',
    style = 'style1',
  } = component.getParameters();

  let title;
  let text;

  const content = getContainerItemContent(component, page);
  if (content !== null) {
    title = content.title;
    text = content.text;
  }

  const fontSize = (titlesize) => {
    switch (titlesize) {
      case 'H1':
        return 32;
      case 'H2':
        return 28;
      case 'H3':
        return 24;
      case 'H4':
        return 22;
      case 'H5':
        return 16;
      default:
        return 14;
    }
  };

  const fontWeight = (titlesize) => {
    switch (titlesize) {
      case 'H5':
        return '500';
      case 'H6':
        return '500';
      default:
        return '400';
    }
  };

  return (
    <>
      <View
        style={{
          backgroundColor: style === 'style1' ? '#fff' : '#007bff',
          padding: 8,
          width: '100%',
        }}
      >
        {title && (
          <Text
            style={{
              color: style === 'style1' ? '#343a40' : '#fff',
              fontSize: fontSize(titlesize),
              fontWeight: fontWeight(titlesize),
              marginBottom: 16,
              textAlign: textalignment,
            }}
          >
            {title}
          </Text>
        )}
        {text && (
          <Text
            style={{
              color: style === 'style1' ? '#343a40' : '#fff',
              textAlign: textalignment,
            }}
          >
            {text}
          </Text>
        )}
      </View>
    </>
  );
};

export default TitleAndText;
