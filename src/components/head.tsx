import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {heightRef} from 'src/config/screenSize';

const Header = () => {
  // const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        height: 30 * heightRef,
        width: '100%',
        backgroundColor: '#224E61',
      }}
    />
  );
};

export default Header;

// This component is being used for the purpose to handle the notches in iphones and android mobiles.
