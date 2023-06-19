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
  FlatList,
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
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import {colors} from 'src/config/colors';
import Button, {Alignments} from 'src/components/button';
import {fontWeights} from 'src/config/fontWeight';
import {useNavigation} from '@react-navigation/native';

const PaymentScreen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();

  // States

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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ImageBackground
        source={Images.header}
        resizeMode="stretch"
        style={{
          width: fullWidth,
          height: fullHeight * 0.38,
          // flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View
          style={{
            marginTop: 60 * heightRef,
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
          }}>
          <Icon
            onPress={() => {
              navigation.goBack();
            }}
            name={'angle-left'}
            type={IconType.FontAwesome}
            size={30 * heightRef}
            color={'#FFFFFF'}
          />
          <Text style={styles.heading}>Méthode de paiement</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon
              onPress={() => {
                navigation.goBack();
              }}
              name={'sharealt'}
              type={IconType.AntDesign}
              size={24 * heightRef}
              color={'transparent'}
            />
          </View>
        </View>
        <Image
          style={styles.titleImage}
          resizeMode="contain"
          source={Images.profile}
        />
        <Text style={styles.heading2}>Jayem</Text>
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
        <Text style={styles.loginText2}>Méthode de paiement par défaut</Text>
        <View
          style={{
            height: 45 * heightRef,
            width: '90%',
            backgroundColor: '#F9FAFB',
            borderRadius: 10 * heightRef,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderColor: '#78B3F5',
            borderWidth: 1,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.notificationImage}
              resizeMode="contain"
              source={Images.masterCard}
            />
            <View style={{marginLeft: 10 * widthRef}}>
              <Text style={styles.notificationText}>**** 2236</Text>
              <Text style={styles.notificationText2}>Richard Willamson</Text>
            </View>
          </View>
          <Button
            onPress={() => {}}
            buttonText={'Défaut'}
            buttonHeight={20 * heightRef}
            buttonWidth={55 * heightRef}
            buttonColor={colors.primary}
            borderColor={colors.primary}
            buttonCorners={20 * heightRef}
            buttonPosition={Alignments.center}
            titleFontStyle={fontWeights.h500}
            titleFontSize={11 * heightRef}
            buttonstyle={{
              // marginVertical: 18 * heightRef,
              // position: 'absolute',
              // bottom: 30 * heightRef,
              marginRight: 10 * widthRef,
            }}
          />
        </View>
        <Text style={styles.loginText2}>Sélectionnez le mode de paiement</Text>
        <View
          style={{
            height: 240 * heightRef,
            width: '90%',
            backgroundColor: '#F9FAFB',
            borderRadius: 10 * heightRef,
            marginTop: 25 * heightRef,

            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '100%',
              marginTop: 15 * heightRef,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.notificationImage}
                resizeMode="contain"
                source={Images.phoneCard}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={[styles.notificationText]}>
                  Payer avec un téléphone portable
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon
                onPress={() => {}}
                name={'angle-right'}
                type={IconType.FontAwesome}
                size={20 * heightRef}
                color={'gray'}
                style={{marginRight: 10 * widthRef}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1 * heightRef,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#D1D5DB',
              marginVertical: 10 * heightRef,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.notificationImage}
                resizeMode="contain"
                source={Images.settings4}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={[styles.notificationText]}>Carte de Crédit</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon
                onPress={() => {
                  navigation.navigate('Payment2Screen');
                }}
                name={'angle-right'}
                type={IconType.FontAwesome}
                size={20 * heightRef}
                color={'gray'}
                style={{marginRight: 10 * widthRef}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1 * heightRef,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#D1D5DB',
              marginVertical: 10 * heightRef,
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.notificationImage}
                resizeMode="contain"
                source={Images.settings4}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={[styles.notificationText]}>Carte de Débit</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon
                onPress={() => {
                  navigation.navigate('Payment2Screen');
                }}
                name={'angle-right'}
                type={IconType.FontAwesome}
                size={20 * heightRef}
                color={'gray'}
                style={{marginRight: 10 * widthRef}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1 * heightRef,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#D1D5DB',
              marginVertical: 10 * heightRef,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-start',
              marginLeft: '5%',
            }}>
            <Icon
              onPress={() => {}}
              name={'add-circle-outline'}
              type={IconType.Ionicons}
              size={20 * heightRef}
              color={'#78B3F5'}
              style={{marginRight: 5 * widthRef, marginBottom: 15}}
            />
            <Text
              style={[
                styles.notificationText,
                {marginBottom: 15 * widthRef, color: '#78B3F5', marginTop: 3},
              ]}>
              Add New Method
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PaymentScreen;
