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
import {CommonActions, useNavigation} from '@react-navigation/native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import * as ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';

const UploadPicScreen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();

  // States
  const [password, setPassword] = useState('');
  const [image, setImage]: any = useState('');
  const [showOption, setShowOption] = useState(false);

  // Selectors

  // Effects
  useEffect(() => {
    console.log('UseEffect');
  }, []);

  useLayoutEffect(() => {
    console.log('UseLayoutEffect');
  }, []);

  // Functions
  const launchImageLibrary = async () => {
    let response = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      maxHeight: 1000,
      maxWidth: 1000,
    });
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorMessage) {
      console.log(response.errorMessage);
    } else if (response.assets) {
      console.log(response.assets);
      setImage({
        name: response.assets[0]?.fileName,
        uri: response.assets[0]?.uri,
        type: response.assets[0]?.type,
      });
      setShowOption(false);
      // const isLicense = await checkIfLicense(response.assets[0]?.uri);
    } else if (response.errorCode) {
      console.log(response.errorCode);
    }
  };
  const launchCamera = async () => {
    let response = await ImagePicker.launchCamera({
      mediaType: 'photo',
      maxHeight: 1000,
      maxWidth: 1000,
    });
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorMessage) {
      console.log(response.errorMessage);
    } else if (response.assets) {
      console.log(response.assets);
      setImage({
        name: response.assets[0]?.fileName,
        uri: response.assets[0]?.uri,
        type: response.assets[0]?.type,
      });
      setShowOption(false);
      // const isLicense = await checkIfLicense(response.assets[0]?.uri);
    } else if (response.errorCode) {
      console.log(response.errorCode);
    }
  };

  // Validators

  // Screen Design
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
            height: fullHeight,
            // flex: 1,
            // backgroundColor: colors.error,
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
            <View style={[styles.pageInnerView]} />
            <View style={[styles.pageInnerView]} />
            <View style={[styles.pageInnerView]} />

            <View style={[styles.pageInnerView]} />
            <View
              style={[
                styles.pageInnerView,
                {backgroundColor: colors.secondary1},
              ]}
            />
          </View>
          <Text style={styles.loginText2}>Ajoute une photo</Text>

          <TouchableOpacity
            onPress={() => {
              // launchImageLibrary();
              setShowOption(true);
            }}
            style={{
              height: 140 * heightRef,
              width: 140 * heightRef,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F3F4F6',
              alignSelf: 'center',
              borderRadius: 100 * heightRef,
              marginTop: '20%',
            }}>
            {image ? (
              <Image
                style={{
                  height: 140 * heightRef,
                  width: 140 * heightRef,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#F3F4F6',
                  alignSelf: 'center',
                  borderRadius: 100 * heightRef,
                }}
                resizeMode="cover"
                source={{uri: image.uri}}></Image>
            ) : (
              <Icon
                name={'camera-plus-outline'}
                type={IconType.MaterialCommunityIcons}
                size={78 * heightRef}
                color={colors.primary}
              />
            )}
          </TouchableOpacity>
        </View>
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
      <Modal
        backdropOpacity={0.3}
        isVisible={showOption}
        onBackdropPress={() => {
          setShowOption(false);
        }}
        onSwipeComplete={() => {
          setShowOption(false);
        }}
        swipeDirection={['down']}
        style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            backgroundColor: colors.background,
            // height: 300,
            width: fullWidth,
            alignSelf: 'center',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            top: 20,
            padding: 40,
          }}>
          <TouchableOpacity
            onPress={() => {
              launchCamera();
            }}>
            <Text style={styles.infoText2}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              launchImageLibrary();
            }}>
            <Text style={styles.infoText2}>Gallery</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default UploadPicScreen;
