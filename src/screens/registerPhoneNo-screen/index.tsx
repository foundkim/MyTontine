import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {styles} from './styles';
import {Images} from 'src/assets';
import {
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from 'src/config/screenSize';
import Button, {Alignments} from 'src/components/button';
import {fontWeights} from 'src/config/fontWeight';
import {colors} from 'src/config/colors';
import {fontSizes} from 'src/config/fontSize';
import Header from 'src/components/head';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const RegisterPhoneNoScreen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();

  // States
  const [password, setPassword] = useState('');

  // Selectors

  // Effects
  useEffect(() => {
    console.log('UseEffect');
  }, []);

  useLayoutEffect(() => {
    console.log('UseLayoutEffect');
  }, []);

  // Functions

  // Validators

  // Screen Design
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <ImageBackground
        source={Images.header}
        resizeMode="stretch"
        style={{
          width: fullWidth,
          height: fullHeight * 0.3,
          // flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Image
          style={styles.titleImage}
          resizeMode="contain"
          source={Images.heading}
        />
      </ImageBackground>
      <View
        style={[
          styles.shadow,
          {
            height: fullHeight * 0.8,
            // flex: 1,
            // backgroundColor: colors.error,
            alignSelf: 'center',
            width: '90%',
            alignItems: 'center',
            top: -80 * heightRef,
            borderRadius: 20 * heightRef,
          },
        ]}>
        <Image
          style={styles.checkImage}
          resizeMode="contain"
          source={Images.userIcon}
        />
        <View style={{top: -40 * heightRef}}>
          <View style={styles.pageView}>
            <View
              style={[
                styles.pageInnerView,
                {backgroundColor: colors.secondary1},
              ]}
            />
            <View style={[styles.pageInnerView]} />
            <View style={[styles.pageInnerView]} />
            <View style={[styles.pageInnerView]} />
            <View style={[styles.pageInnerView]} />
          </View>
          <Text style={styles.loginText2}>
            S'il vous plait enregistrez vous
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="+225"
            placeholderTextColor={'#9CA3AF'}
            keyboardType="numeric"
          />
        </View>
        <Button
          onPress={() => {
            navigation.navigate('RegisterVerificationScreen');
          }}
          buttonText={'Vérifier'}
          buttonHeight={40 * heightRef}
          buttonWidth={0.8 * fullWidth}
          buttonColor={colors.primary}
          borderColor={colors.primary}
          buttonCorners={20 * heightRef}
          buttonPosition={Alignments.center}
          titleFontStyle={fontWeights.h500}
          buttonstyle={{
            marginVertical: 18 * heightRef,
            position: 'absolute',
            bottom: 30 * heightRef,
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterPhoneNoScreen;
