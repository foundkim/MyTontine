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
import {fontSizes} from 'src/config/fontSize';
import {useNavigation} from '@react-navigation/native';

const TransactionScreen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();
  let data = [
    {
      name: 'Garantie',
      type: 2,
    },
    {
      name: 'Paiment Final',
      type: 4,
    },
    {
      name: 'Remboursement',
      type: 3,
    },
    {
      name: 'Paiment 20%',
      type: 1,
    },
    {
      name: 'Garantie',
      type: 2,
    },
    {
      name: 'Remboursement',
      type: 3,
    },
  ];
  let dataCredit = [
    {
      name: 'Garantie',
      type: 2,
    },

    {
      name: 'Garantie',
      type: 2,
    },
  ];
  let dataDebit = [
    {
      name: 'Paiment Final',
      type: 4,
    },

    {
      name: 'Paiment 20%',
      type: 1,
    },
  ];
  let dataRefus = [
    {
      name: 'Remboursement',
      type: 3,
    },
    {
      name: 'Remboursement',
      type: 3,
    },
  ];

  // States
  const [option, setOption] = useState('Tout');

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
          height: fullHeight * 0.3,
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
            color={'transparent'}
          />
          <Image
            style={styles.titleImage}
            resizeMode="contain"
            source={Images.heading}
          />
          <View style={{flexDirection: 'row'}}>
            <Icon
              onPress={() => {
                navigation.navigate('NotificationsScreen');
              }}
              name={'bell'}
              type={IconType.Feather}
              size={24 * heightRef}
              color={'#FFFFFF'}
            />
            <Icon
              onPress={() => {
                navigation.navigate('SettingsScreen');
              }}
              name={'settings'}
              type={IconType.Feather}
              size={22 * heightRef}
              color={'#FFFFFF'}
              style={{marginLeft: 10}}
            />
          </View>
        </View>
        <View
          style={{
            height: 80 * heightRef,
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setOption('Tout')}
            style={{
              height: 35 * heightRef,
              width: 80 * widthRef,
              backgroundColor:
                option == 'Tout' ? colors.primary : 'transparent',
              borderRadius: 13 * heightRef,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#F3F4F6',
                fontWeight: fontWeights.h700,
                fontSize: fontSizes.f16,
              }}>
              Tout
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setOption('Crédit')}
            style={{
              height: 35 * heightRef,
              width: 80 * widthRef,
              backgroundColor:
                option == 'Crédit' ? colors.primary : 'transparent',
              borderRadius: 13 * heightRef,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#F3F4F6',
                fontWeight: fontWeights.h700,
                fontSize: fontSizes.f16,
              }}>
              Crédit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setOption('Débit')}
            style={{
              height: 35 * heightRef,
              width: 80 * widthRef,
              backgroundColor:
                option == 'Débit' ? colors.primary : 'transparent',
              borderRadius: 13 * heightRef,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#F3F4F6',
                fontWeight: fontWeights.h700,
                fontSize: fontSizes.f16,
              }}>
              Débit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setOption('Refus')}
            style={{
              height: 35 * heightRef,
              width: 80 * widthRef,
              backgroundColor:
                option == 'Refus' ? colors.primary : 'transparent',
              borderRadius: 13 * heightRef,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#F3F4F6',
                fontWeight: fontWeights.h700,
                fontSize: fontSizes.f16,
              }}>
              Refus
            </Text>
          </TouchableOpacity>
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
            // alignItems: 'center',
            top: -80 * heightRef,
            borderRadius: 20 * heightRef,
          },
        ]}>
        <View
          style={{
            // backgroundColor: 'pink'
            marginTop: 20,
          }}>
          <FlatList
            data={
              option == 'Tout'
                ? data
                : option == 'Crédit'
                ? dataCredit
                : option == 'Débit'
                ? dataDebit
                : dataRefus
            }
            showsVerticalScrollIndicator={false}
            style={{width: '95%', alignSelf: 'center'}}
            renderItem={({item, index}) => (
              <View
                style={{
                  margin: 5 * heightRef,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={styles.checkImage}
                      resizeMode="contain"
                      source={
                        item.type == 1
                          ? Images.wallet1
                          : item.type == 2
                          ? Images.wallet2
                          : item.type == 3
                          ? Images.wallet3
                          : Images.wallet4
                      }
                    />
                    <View style={{marginLeft: 10 * widthRef}}>
                      <Text style={styles.infoText}>{item.name}</Text>
                      <Text style={styles.infoText2}>08/04/2023 a 8:20</Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.infoText,
                        {
                          alignSelf: 'flex-end',
                          color:
                            item.type == 2
                              ? '#22C55E'
                              : item.type == 4
                              ? '#EF4444'
                              : colors.black,
                        },
                      ]}>
                      11 000 FCFA
                    </Text>
                    <Text style={styles.infoText2}>Transaction Conforme</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: '#d3d3d3',
                    marginVertical: 10 * heightRef,
                  }}
                />
              </View>
            )}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TransactionScreen;
