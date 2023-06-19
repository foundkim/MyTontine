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
import {CommonActions, useNavigation} from '@react-navigation/native';
import {fontSizes} from 'src/config/fontSize';

const NotificationsScreen = (props: any) => {
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
          height: Platform.OS == 'ios' ? fullHeight * 0.25 : fullHeight * 0.2,
          // flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View
          style={{
            marginTop: Platform.OS == 'ios' ? 60 * heightRef : 10 * heightRef,
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
          <Text style={styles.heading}>Notifications</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon
              onPress={() => {}}
              name={'sharealt'}
              type={IconType.AntDesign}
              size={24 * heightRef}
              color={'transparent'}
            />
          </View>
        </View>
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
        <View
          style={{
            // height: 240 * heightRef,
            width: '100%',
            borderRadius: 10 * heightRef,
            marginTop: 25 * heightRef,
            alignItems: 'center',
            paddingRight: 5 * widthRef,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '100%',
              marginTop: 5 * heightRef,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.notificationImage}
                resizeMode="contain"
                source={Images.notification}
              />
              <View
                style={{
                  marginLeft: 5 * widthRef,

                  justifyContent: 'space-between',
                }}>
                <Text style={[styles.notificationText]}>
                  Retard paiement de cotisation
                </Text>
                <Text
                  style={[
                    styles.notificationText2,
                    {marginTop: 3 * heightRef},
                  ]}>
                  08/04/2023 a 8:20
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{alignItems: 'flex-end', position: 'absolute', right: 0}}>
              <Text style={[styles.notificationText2, {color: colors.success}]}>
                Non lue
              </Text>
              <Text
                style={[
                  styles.notificationText2,
                  {color: colors.success, fontSize: fontSizes.f11},
                ]}>
                10 000 FCFA
              </Text>
              <Text style={[styles.notificationText2]}>
                Transaction Conforme
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1 * heightRef,
              width: '95%',
              alignSelf: 'center',
              backgroundColor: '#D1D5DB',
              marginVertical: 10 * heightRef,
            }}
          />
          <View
            style={{
              width: '100%',
              marginTop: 5 * heightRef,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={[styles.notificationImage, {tintColor: 'gray'}]}
                resizeMode="contain"
                source={Images.notification}
              />
              <View
                style={{
                  marginLeft: 5 * widthRef,

                  justifyContent: 'space-between',
                }}>
                <Text style={[styles.notificationText]}>
                  Retard paiement de cotisation
                </Text>
                <Text
                  style={[
                    styles.notificationText2,
                    {marginTop: 3 * heightRef},
                  ]}>
                  08/04/2023 a 8:20
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{alignItems: 'flex-end', position: 'absolute', right: 0}}>
              <Text style={[styles.notificationText2]}>Lue</Text>
              <Text
                style={[styles.notificationText2, {fontSize: fontSizes.f11}]}>
                10 000 FCFA
              </Text>
              <Text style={[styles.notificationText2]}>
                Transaction Conforme
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1 * heightRef,
              width: '95%',
              alignSelf: 'center',
              backgroundColor: '#D1D5DB',
              marginVertical: 10 * heightRef,
            }}
          />
          <View
            style={{
              width: '100%',
              marginTop: 5 * heightRef,
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={[styles.notificationImage, {tintColor: 'gray'}]}
                resizeMode="contain"
                source={Images.notification}
              />
              <View
                style={{
                  marginLeft: 5 * widthRef,

                  justifyContent: 'space-between',
                }}>
                <Text style={[styles.notificationText]}>
                  Retard paiement de cotisation
                </Text>
                <Text
                  style={[
                    styles.notificationText2,
                    {marginTop: 3 * heightRef},
                  ]}>
                  08/04/2023 a 8:20
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{alignItems: 'flex-end', position: 'absolute', right: 0}}>
              <Text style={[styles.notificationText2]}>Lue</Text>
              <Text
                style={[styles.notificationText2, {fontSize: fontSizes.f11}]}>
                10 000 FCFA
              </Text>
              <Text style={[styles.notificationText2]}>
                Transaction Conforme
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NotificationsScreen;
