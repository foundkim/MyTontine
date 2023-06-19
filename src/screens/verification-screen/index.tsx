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
  fontRef,
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from 'src/config/screenSize';
import Button, {Alignments} from 'src/components/button';
import {fontWeights} from 'src/config/fontWeight';
import {colors} from 'src/config/colors';
import OtpInputs from 'react-native-otp-inputs';
import {fontSizes} from 'src/config/fontSize';
import Header from 'src/components/head';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const VerificationScreen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();

  // States
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

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
    <KeyboardAwareScrollView>
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
          source={Images.checkIcon}
        />
        <View style={{top: -40 * heightRef}}>
          <Text style={styles.loginText2}>Vérification OTP</Text>
          <Text style={styles.loginText3}>Entrer le code OTP envoyé au</Text>
          <Text
            style={[
              styles.loginText3,
              {fontWeight: fontWeights.h700, color: colors.black},
            ]}>
            +225 04554516
          </Text>
          <View style={{height: 150 * heightRef}}>
            <OtpInputs
              autoFocus={true}
              inputContainerStyles={{
                marginHorizontal: 7 * widthRef,
                width: 45 * heightRef,
                height: 45 * heightRef,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderWidth: 1 * widthRef,
                backgroundColor: '#F9FAFB',
                borderColor: code.length == 6 ? colors.primary : '#E5E7EB',
                paddingLeft: Platform.OS == 'android' ? 5 * widthRef : 0,
                borderRadius: 9 * heightRef,
              }}
              autofillFromClipboard
              inputStyles={{
                color: colors.primary,
                alignSelf: 'center',
                fontSize: 16 * fontRef,
                top: Platform.OS == 'android' ? 2.5 * heightRef : 0,
                left: Platform.OS == 'android' ? 2 : 0,
              }}
              handleChange={code => setCode(code)}
              numberOfInputs={4}
            />
          </View>
          <Text style={styles.loginText3}>Vous n’avez pas reçu de code?</Text>
          <Text style={styles.loginText1}>Renvoyer le code</Text>
        </View>
        <Button
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: 'TabNavigator',
                    params: {},
                  },
                ],
              }),
            );
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

export default VerificationScreen;
