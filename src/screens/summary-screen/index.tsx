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

const SummaryScreen = (props: any) => {
  // Variables

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
          height: fullHeight * 0.25,
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
            onPress={() => {}}
            name={'angle-left'}
            type={IconType.FontAwesome}
            size={30 * heightRef}
            color={'#FFFFFF'}
          />
          <Image
            style={styles.titleImage}
            resizeMode="contain"
            source={Images.heading}
          />
          <View style={{flexDirection: 'row'}}>
            <Icon
              onPress={() => {}}
              name={'sharealt'}
              type={IconType.AntDesign}
              size={24 * heightRef}
              color={'#FFFFFF'}
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
        <Text style={styles.loginText2}>Facture</Text>
        <View
          style={{
            width: '90%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginLeft: 10 * widthRef,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.profileImage}
              resizeMode="contain"
              source={Images.currency}
            />
            <Text style={styles.nameText}>Devise</Text>
          </View>
          <Text style={styles.noText}>CFA</Text>
        </View>
        <View
          style={{
            width: '90%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 10 * heightRef,
          }}>
          <View
            style={{
              marginLeft: 10 * widthRef,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.profileImage}
              resizeMode="contain"
              source={Images.duration}
            />
            <Text style={styles.nameText}>Cotisation</Text>
          </View>
          <Text style={styles.noText}>100,000</Text>
        </View>
        <View
          style={{
            width: '90%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 10 * heightRef,
          }}>
          <View
            style={{
              marginLeft: 10 * widthRef,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={styles.profileImage}
              resizeMode="contain"
              source={Images.amount}
            />
            <Text style={styles.nameText}>Durée</Text>
          </View>
          <Text style={styles.noText}>5 Semaines</Text>
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
            width: '90%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 10 * heightRef,
          }}>
          <Text style={[styles.noText, {color: '#9CA3AF'}]}>Cotisation</Text>
          <Text style={styles.noText}>100,000</Text>
        </View>
        <View
          style={{
            width: '90%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 10 * heightRef,
          }}>
          <Text style={[styles.noText, {color: '#9CA3AF'}]}>
            Frais d’inscription
          </Text>
          <Text style={styles.noText}>10,000</Text>
        </View>
        <View
          style={{
            width: '90%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 10 * heightRef,
          }}>
          <Text style={[styles.noText, {color: '#9CA3AF'}]}>Taux frais</Text>
          <Text style={styles.noText}>10%</Text>
        </View>

        <View
          style={{
            width: '90%',
          }}>
          <Text
            numberOfLines={1}
            style={{
              textDecorationLine: 'underline',
              textDecorationStyle: 'dashed',
              width: '100%',
              color: 'white',
              textDecorationColor: '#D1D5DB',
              marginVertical: 10 * heightRef,
            }}>
            abcdccsdcsdcsdcsdcscsdcsdcsdcsdcsdcaaaaaa
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 10 * heightRef,
          }}>
          <Text style={[styles.noText, {color: '#9CA3AF'}]}>
            Montant à payer
          </Text>
          <Text style={styles.nameText}>110,000</Text>
        </View>
        <View
          style={{
            height: 1 * heightRef,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: '#D1D5DB',
            marginVertical: 20 * heightRef,
          }}
        />
        <Text
          style={[
            styles.noText,
            {color: '#6B7280', alignSelf: 'flex-start', marginLeft: '5%'},
          ]}>
          Méthode de paiement par défaut
        </Text>
        <View
          style={{
            height: 100 * heightRef,
            width: '90%',
            backgroundColor: '#F9FAFB',
            borderRadius: 10 * heightRef,
            marginTop: 15 * heightRef,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
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
          <TouchableOpacity>
            <Text
              style={[
                styles.notificationText,
                {marginRight: 15 * widthRef, color: '#78B3F5'},
              ]}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button
        onPress={() => {}}
        buttonText={'Fait'}
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
          bottom: 20 * heightRef,
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default SummaryScreen;
