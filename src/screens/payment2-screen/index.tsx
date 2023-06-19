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
import Modal from 'react-native-modal';
import {fontSizes} from 'src/config/fontSize';

const Payment2Screen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();

  // States
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showOption, setShowOption] = useState(false);
  const [password, setPassword] = useState('');
  const [focus, setFocus] = useState(false);
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '96%',
            marginVertical: 10 * heightRef,
          }}>
          <Image
            style={styles.notificationImage}
            resizeMode="contain"
            source={Images.settings4}
          />
          <View style={{marginLeft: 10 * widthRef}}>
            <Text style={[styles.notificationText]}>Carte de Débit</Text>
          </View>
        </View>

        <Text style={styles.loginText2}>Sélectionnez le mode de paiement</Text>
        <Image
          style={{height: 70 * heightRef, width: '90%'}}
          resizeMode="contain"
          source={Images.cards}
        />
        <View
          style={{
            height: 280 * heightRef,
            width: '90%',
            backgroundColor: '#F9FAFB',
            borderRadius: 10 * heightRef,
            marginTop: 25 * heightRef,

            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <FlatList
            data={[1, 2, 3, 4]}
            showsVerticalScrollIndicator={false}
            style={{width: '95%', alignSelf: 'center'}}
            renderItem={({item, index}) => (
              <View
                style={{
                  height: 45 * heightRef,
                  width: '100%',
                  backgroundColor: '#F9FAFB',
                  borderRadius: 10 * heightRef,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderColor: '#d3d3d3',
                  borderBottomWidth: 1,
                  marginTop: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.notificationImage}
                    resizeMode="contain"
                    source={Images.masterCard}
                  />
                  <View style={{marginLeft: 10 * widthRef}}>
                    <Text style={styles.notificationText}>**** 2236</Text>
                    <Text style={styles.notificationText2}>
                      Richard Willamson
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedIndex(index);
                  }}
                  style={{
                    height: 15 * heightRef,
                    width: 15 * heightRef,
                    borderRadius: 20,
                    borderWidth: 1,
                    marginRight: 10 * widthRef,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor:
                      selectedIndex == index ? colors.primary : 'gray',
                  }}>
                  {selectedIndex == index ? (
                    <View
                      style={{
                        height: 10 * heightRef,
                        width: 10 * heightRef,
                        backgroundColor: colors.primary,
                        borderRadius: 90,
                      }}></View>
                  ) : null}
                </TouchableOpacity>
              </View>
            )}
          />

          <TouchableOpacity
            onPress={() => setShowOption(true)}
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
          </TouchableOpacity>
        </View>
      </View>
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
        style={{flex: 1, justifyContent: focus ? 'flex-start' : 'flex-end'}}>
        <View
          style={{
            backgroundColor: colors.background,
            // height: 300,
            width: fullWidth,
            alignSelf: 'center',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            top: 20,
          }}>
          <View
            style={{
              height: 5 * heightRef,
              width: 70 * widthRef,
              backgroundColor: '#CBD5E1',
              alignSelf: 'center',
              marginTop: 2 * heightRef,
              borderRadius: 5,
            }}></View>
          <Text style={styles.heading3}>Ajouter une nouvelle carte</Text>
          <View
            style={{
              width: '100%',
              // height: 25 * heightRef,

              marginTop: 10 * heightRef,
              alignSelf: 'center',
              // alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                // backgroundColor: '#F3F4F6',
                padding: 15 * heightRef,
                paddingHorizontal: 0,
                width: 0.9 * fullWidth,
                marginVertical: 5,
                alignSelf: 'center',
                borderRadius: 5,
                // flexDirection: 'row',
                // alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: fontWeights.h400,
                  fontSize: fontSizes.f12,
                  // textAlign: 'center',
                  color: '#64748B',
                  marginLeft: 5 * widthRef,
                  alignSelf: 'flex-start',
                }}>
                Numéro de compte
              </Text>

              <TextInput
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                style={{
                  height: 56 * heightRef,
                  borderRadius: 14 * heightRef,
                  padding: 10,
                  backgroundColor: '#F4F4F4',
                  color: 'black',
                  marginTop: 20 * heightRef,
                  fontFamily: 'Sen-Regular',
                  fontSize: fontSizes.f14,
                  paddingLeft: 25 * heightRef,
                }}
                onChangeText={setPassword}
                value={password}
                placeholder="0000-0000-0000-0000"
                placeholderTextColor={'#9CA3AF'}
              />
            </View>

            <View
              style={{
                // backgroundColor: '#F3F4F6',
                padding: 15 * heightRef,
                paddingHorizontal: 0,
                width: 0.9 * fullWidth,
                marginVertical: 5,
                alignSelf: 'center',
                borderRadius: 5,
                // flexDirection: 'row',
                // alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: fontWeights.h400,
                  fontSize: fontSizes.f12,
                  // textAlign: 'center',
                  color: '#64748B',
                  marginLeft: 5 * widthRef,
                  alignSelf: 'flex-start',
                }}>
                Nom et prénom
              </Text>

              <TextInput
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                style={{
                  height: 56 * heightRef,
                  borderRadius: 14 * heightRef,
                  padding: 10,
                  backgroundColor: '#F4F4F4',
                  color: 'black',
                  marginTop: 20 * heightRef,
                  fontFamily: 'Sen-Regular',
                  fontSize: fontSizes.f14,
                  paddingLeft: 25 * heightRef,
                }}
                onChangeText={setPassword}
                value={password}
                placeholder="Richard Williamson"
                placeholderTextColor={'#9CA3AF'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: fullWidth,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  padding: 15 * heightRef,
                  paddingHorizontal: 0,
                  width: 0.45 * fullWidth,
                  marginVertical: 5,
                  alignSelf: 'center',
                  borderRadius: 5,
                  marginLeft: 15 * widthRef,
                  // flexDirection: 'row',
                  // alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: fontWeights.h400,
                    fontSize: fontSizes.f12,
                    // textAlign: 'center',
                    color: '#64748B',
                    marginLeft: 5 * widthRef,
                    alignSelf: 'flex-start',
                  }}>
                  Date d'expiration
                </Text>

                <TextInput
                  style={{
                    height: 56 * heightRef,
                    borderRadius: 14 * heightRef,
                    padding: 10,
                    backgroundColor: '#F4F4F4',
                    color: 'black',
                    marginTop: 20 * heightRef,
                    fontFamily: 'Sen-Regular',
                    fontSize: fontSizes.f14,
                    // width: '40%',
                    paddingLeft: 25 * heightRef,
                  }}
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  onChangeText={setPassword}
                  value={password}
                  placeholder="MM/YY"
                  placeholderTextColor={'#9CA3AF'}
                />
              </View>
              <View
                style={{
                  // backgroundColor: '#F3F4F6',
                  padding: 15 * heightRef,
                  paddingHorizontal: 0,
                  width: 0.45 * fullWidth,
                  marginVertical: 5,
                  alignSelf: 'center',
                  borderRadius: 5,
                  marginLeft: 15 * widthRef,
                  // flexDirection: 'row',
                  // alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: fontWeights.h400,
                    fontSize: fontSizes.f12,
                    // textAlign: 'center',
                    color: '#64748B',
                    marginLeft: 5 * widthRef,
                    alignSelf: 'flex-start',
                  }}>
                  CVC
                </Text>

                <TextInput
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  style={{
                    height: 56 * heightRef,
                    borderRadius: 14 * heightRef,
                    width: '90%',
                    padding: 10,
                    backgroundColor: '#F4F4F4',
                    color: 'black',
                    marginTop: 20 * heightRef,
                    fontFamily: 'Sen-Regular',
                    fontSize: fontSizes.f14,
                    paddingLeft: 25 * heightRef,
                  }}
                  onChangeText={setPassword}
                  value={password}
                  placeholder="000"
                  placeholderTextColor={'#9CA3AF'}
                  maxLength={3}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Payment2Screen;
