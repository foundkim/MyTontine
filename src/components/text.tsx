/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text as RNText, TextProps, TouchableOpacity} from 'react-native';
import {translation} from 'src/config/translation';

const Text = ({onPress, children, ...rest}: TextProps) => {
  let a = 'spanish';
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <RNText {...rest}>
        {
          // translation[children] ||
          children
        }
      </RNText>
    </TouchableOpacity>
  );
};

export default Text;
