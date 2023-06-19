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
  Switch,
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

const SettingsScreen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();

  // States
  const [isEnabled, setIsEnabled] = useState(false);

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
          <Text style={styles.heading}>Paramètres</Text>
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '90%',
          }}>
          <Image
            style={styles.titleImage}
            resizeMode="contain"
            source={Images.profile}
          />
          <Text
            style={[
              styles.heading,
              {
                color: colors.black,
                marginHorizontal: 10 * widthRef,
                marginTop: 20 * heightRef,
              },
            ]}>
            Jayem
          </Text>
        </View>
        <View
          style={{
            // height: 240 * heightRef,
            width: '90%',
            borderRadius: 10 * heightRef,
            marginTop: 25 * heightRef,
            alignItems: 'center',
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
                source={Images.settings1}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={[styles.notificationText]}>Notifications</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon
                onPress={() => {
                  navigation.navigate('NotificationsScreen');
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
              width: '95%',
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
                source={Images.settings2}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={[styles.notificationText]}>
                  Changer le mot de passe
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon
                onPress={() => {
                  navigation.navigate('ChangePasswordScreen');
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
              width: '95%',
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
                source={Images.settings3}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={[styles.notificationText]}>Confidentialité</Text>
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
                <Text style={[styles.notificationText]}>
                  Méthode de paiement
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon
                onPress={() => {
                  navigation.navigate('ChooseMethodScreen');
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
                source={Images.settings5}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={[styles.notificationText]}>Aide</Text>
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
              marginTop: 5 * heightRef,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={styles.notificationImage}
                resizeMode="contain"
                source={Images.settings1}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={[styles.notificationText]}>Editer le profil</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon
                onPress={() => {
                  navigation.navigate('EditProfileScreen');
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
              width: '95%',
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
                source={Images.settings2}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={[styles.notificationText]}>
                  Supprimer mon compte
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon
                onPress={() => {
                  navigation.navigate('DeleteAccountScreen');
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
              width: '95%',
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
                source={Images.settings3}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={[styles.notificationText]}>Me déconnecter</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon
                onPress={() => {
                  navigation.dispatch(
                    CommonActions.reset({
                      index: 1,
                      routes: [
                        {
                          name: 'SplashScreen',
                          params: {},
                        },
                      ],
                    }),
                  );
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
              width: '95%',
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
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={[styles.notificationText]}>
                  Autoriser les notifications
                </Text>
              </View>
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}

              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsEnabled(!isEnabled)}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SettingsScreen;
