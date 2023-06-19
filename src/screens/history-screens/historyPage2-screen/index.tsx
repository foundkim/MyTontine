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
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const HistoryPage2Screen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
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

  // States
  const [option, setOption] = useState('Tout');
  const [tab, setTab] = useState('En attente');

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
          height: fullHeight * 0.24,
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
          <Image
            style={styles.titleImage}
            resizeMode="contain"
            source={Images.heading}
          />
          <View style={{flexDirection: 'row'}}>
            <Icon
              onPress={() => {}}
              name={'bell'}
              type={IconType.Feather}
              size={24 * heightRef}
              color={'#FFFFFF'}
            />
            <Icon
              onPress={() => {}}
              name={'settings'}
              type={IconType.Feather}
              size={22 * heightRef}
              color={'#FFFFFF'}
              style={{marginLeft: 10}}
            />
            <Image
              style={styles.profileImage}
              resizeMode="contain"
              source={Images.profile}
            />
          </View>
        </View>
      </ImageBackground>
      <View
        style={[
          // styles.shadow,
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
          style={[
            styles.shadow,
            {
              // backgroundColor: 'pink',
              marginTop: 5 * heightRef,
              borderRadius: 10 * heightRef,
              paddingBottom: 15 * heightRef,
              paddingTop: 10,
            },
          ]}>
          <ImageBackground
            source={Images.detailTontine}
            resizeMode="stretch"
            style={{
              width: fullWidth * 0.95,
              height: 220 * heightRef,
              // justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: -20 * heightRef,

              // paddingHorizontal: 10,
            }}>
            <View
              style={{
                width: '85%',
                // height: 20 * heightRef,
                marginTop: 30 * heightRef,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.loginText2}>La Team Hadja</Text>
              <View>
                <Button
                  onPress={() => {}}
                  buttonText={'En cours'}
                  buttonHeight={20 * heightRef}
                  buttonWidth={0.2 * fullWidth}
                  buttonColor={'#3E6475'}
                  borderColor={'#3E6475'}
                  titleColor={colors.background}
                  titleFontSize={10 * fontRef}
                  buttonCorners={20 * heightRef}
                  buttonPosition={Alignments.center}
                  titleFontStyle={fontWeights.h500}
                  buttonstyle={
                    {
                      // marginTop: 20 * heightRef,
                      // marginBottom: 10 * heightRef,
                    }
                  }
                />
                <Text style={[styles.infoText3, {marginTop: 5 * heightRef}]}>
                  N Ref:E1885EFDF
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={[
                  styles.infoText2,
                  {color: '#E5E7EB', alignSelf: 'center'},
                ]}>
                Solde
              </Text>
              <Text
                style={[
                  styles.loginText2,
                  {color: colors.black, alignSelf: 'center'},
                ]}>
                2000 Euros
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '40%',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'flex-start',
                marginTop: 5 * heightRef,
                marginLeft: 20 * widthRef,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={[styles.checkImage2, {tintColor: colors.background}]}
                  resizeMode="contain"
                  source={Images.moneyIcon}
                />
                <View style={{marginLeft: 10 * widthRef}}>
                  <Text style={[styles.infoText4, {color: colors.background}]}>
                    {'Montant'}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.infoText5}>100 Euro</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '40%',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'flex-start',
                marginTop: 5 * heightRef,
                marginLeft: 20 * widthRef,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={[styles.checkImage2, {tintColor: colors.background}]}
                  resizeMode="contain"
                  source={Images.timeIcon}
                />
                <View style={{marginLeft: 10 * widthRef}}>
                  <Text style={[styles.infoText4, {color: colors.background}]}>
                    {'Durée'}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.infoText5}>5 Mois</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '40%',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'flex-start',
                marginTop: 5 * heightRef,
                marginLeft: 20 * widthRef,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={[styles.checkImage2, {tintColor: colors.background}]}
                  resizeMode="contain"
                  source={Images.peopleIcon}
                />
                <View style={{marginLeft: 10 * widthRef}}>
                  <Text style={[styles.infoText4, {color: colors.background}]}>
                    {'Participants'}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.infoText5}>5/5</Text>
              </View>
            </View>
          </ImageBackground>

          <View
            style={{
              height: 0.5 * heightRef,
              width: '95%',
              backgroundColor: '#d3d3d3',
              alignSelf: 'center',
            }}
          />

          <View
            style={{
              width: '96%',
              backgroundColor: '#FAFAFA',
              padding: 15 * heightRef,
              alignSelf: 'center',
              marginTop: 0 * heightRef,
              borderRadius: 20 * heightRef,
            }}>
            <Text
              style={[
                styles.loginText2,
                {color: '#EF4444', textAlign: 'left'},
              ]}>
              En retard
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  style={styles.checkImage2}
                  resizeMode="contain"
                  source={Images.moneyIcon}
                />

                <Text
                  style={[
                    styles.infoText3,
                    {marginLeft: 5 * widthRef, color: 'gray'},
                  ]}>
                  Prochaine échéance:
                </Text>
              </View>

              <Text style={[styles.infoText]}>05/05/2023</Text>
            </View>
            <View
              style={{
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: 20 * heightRef,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={styles.checkImage}
                  resizeMode="contain"
                  source={Images.wallet2}
                />
                <Text style={[styles.infoText]}>100</Text>
                <Text style={styles.infoText2}>Contribution</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={styles.checkImage}
                  resizeMode="contain"
                  source={Images.wallet5}
                />
                <Text style={[styles.infoText]}>100</Text>
                <Text style={styles.infoText2}>Garantie</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={styles.checkImage}
                  resizeMode="contain"
                  source={Images.wallet6}
                />
                <Text style={[styles.infoText]}>0</Text>
                <Text style={styles.infoText2}>Récupéré</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 50 * heightRef,
            width: '100%',
            backgroundColor: '#F3F4F6',
            marginVertical: 10 * heightRef,
            borderRadius: 10 * heightRef,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setTab('En attente')}
            style={{
              height: 40 * heightRef,
              width: '40%',
              backgroundColor:
                tab == 'En attente' ? colors.primary : 'transparent',
              borderRadius: 10 * heightRef,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: tab == 'En attente' ? colors.background : '#6B7280',
                fontWeight: fontWeights.h700,
                fontSize: 12 * heightRef,
              }}>
              Mes Echeances
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab('Terminé')}
            style={{
              height: 40 * heightRef,
              width: '40%',
              backgroundColor:
                tab == 'Terminé' ? colors.primary : 'transparent',
              borderRadius: 10 * heightRef,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: tab == 'Terminé' ? colors.background : '#6B7280',
                fontWeight: fontWeights.h700,
                fontSize: 12 * heightRef,
              }}>
              Membres
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.shadow,
            {
              // backgroundColor: 'pink',

              borderRadius: 10 * heightRef,
              paddingBottom: 15 * heightRef,
              paddingTop: 10,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              width: '95%',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={[styles.checkImage3, {height: 25 * heightRef}]}
                resizeMode="contain"
                source={Images.profile}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={styles.infoText3}>{'+223324454564656'}</Text>
              </View>
            </View>
            <View>
              <Text style={[styles.infoText3, {color: '#22C55E'}]}>
                {'Actif'}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: '#D3d3d3',
              width: '95%',
              marginVertical: 5 * heightRef,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '95%',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={[styles.checkImage3, {height: 25 * heightRef}]}
                resizeMode="contain"
                source={Images.profile}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={styles.infoText3}>{'+223324454564656'}</Text>
              </View>
            </View>
            <View>
              <Text style={[styles.infoText3, {color: '#22C55E'}]}>
                {'Actif'}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: '#D3d3d3',
              width: '95%',
              marginVertical: 5 * heightRef,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '95%',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={[styles.checkImage3, {height: 25 * heightRef}]}
                resizeMode="contain"
                source={Images.profile}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={styles.infoText3}>{'+223324454564656'}</Text>
              </View>
            </View>
            <View>
              <Text style={[styles.infoText3, {color: '#EF4444'}]}>
                {'Quitté'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HistoryPage2Screen;
