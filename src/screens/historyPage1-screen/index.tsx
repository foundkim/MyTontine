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
import Carousel from 'react-native-snap-carousel';
import {fontSizes} from 'src/config/fontSize';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const HistoryPage1Screen = (props: any) => {
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
  const CarouselSlide = (data: any) => {
    console.log('--->', data);
    return (
      <TouchableOpacity
        onLongPress={() => {
          navigation.navigate('HistoryPage2Screen', {
            item: data.data.item.colors,
          });
        }}
        style={[
          styles.shadow,
          {
            backgroundColor: 'transprent',
            marginTop: 5 * heightRef,
            borderRadius: 20 * heightRef,
            // paddingBottom: 15 * heightRef,
            padding: 1,
          },
        ]}>
        <LinearGradient
          colors={data.data.item.colors}
          style={[
            styles.shadow,
            {
              // backgroundColor: 'pink',
              // marginTop: 5 * heightRef,
              borderRadius: 20 * heightRef,
              paddingBottom: 15 * heightRef,
              padding: 10,
              height: 280 * heightRef,
            },
          ]}>
          <Text style={styles.loginText2}>La Team Hadja</Text>
          <View
            style={{
              width: '100%',
              // height: 20 * heightRef,
              // flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Button
              onPress={() => {}}
              buttonText={'En cours'}
              buttonHeight={20 * heightRef}
              buttonWidth={0.2 * fullWidth}
              buttonColor={'#A3C55A'}
              borderColor={'#A3C55A'}
              titleColor={colors.black}
              titleFontSize={12 * fontRef}
              buttonCorners={20 * heightRef}
              buttonPosition={Alignments.center}
              titleFontStyle={fontWeights.h500}
              buttonstyle={{
                marginTop: 20 * heightRef,
                marginBottom: 10 * heightRef,
              }}
            />
            <Text style={styles.infoText3}>N Ref:E1885EFDF</Text>
          </View>

          {/* <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center',
              marginVertical: 20 * heightRef,
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
          </View> */}
          <View
            style={{
              height: 0.5,
              backgroundColor: '#D3d3d3',
              width: '95%',
              alignSelf: 'center',
              // top: 8 * heightRef,
              marginVertical: 20 * heightRef,
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
                style={styles.checkImage2}
                resizeMode="contain"
                source={Images.moneyIcon}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={styles.infoText}>{'Montant'}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.infoText3}>100 Euro</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '95%',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 10 * heightRef,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={styles.checkImage2}
                resizeMode="contain"
                source={Images.timeIcon}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={styles.infoText}>{'Durée'}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.infoText3}>5 Mois</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '95%',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 10 * heightRef,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={styles.checkImage2}
                resizeMode="contain"
                source={Images.peopleIcon}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={styles.infoText}>{'Participants'}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.infoText3}>5/5</Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const MyCarousel = () => {
    const data = [
      {
        id: '1',
        title: 'Rejoignez une tontine automatisé',
        text: "Enregistrez-vous et laissez le système vous associer à d'autres personnes qui souhaitent former une tontine avec les mêmes préférences que vous.",

        colors: ['#485266', '#5c6687', '#8394cc'],
      },
      {
        id: '2',
        title: 'Invitez vos amis dans votre tontine',
        text: "Formez votre propre équipe, créer une tontine et invitez vos amis à rejoindre votre communauté. C'est toujours plus amusant en groupe !",
        colors: ['#598a94', '#2da9ba', '#76b9c2'],
      },
      {
        id: '3',
        title: 'Gérez votre communauté',
        text: 'Assumez le rôle de gestionnaire de votre communauté en payant les cotisations, en respectant les échéances et en assurant la gestion de toutes les transactions financières.',
        colors: ['#4b6e57', '#57946d', '#70e099'],
      },
      // Add more slides as needed
    ];

    return (
      <Carousel
        data={data}
        renderItem={(item: any) => <CarouselSlide data={item} />}
        sliderWidth={fullWidth}
        itemWidth={fullWidth * 0.6}
        loop={false}
        autoplay={false}
        autoplayDelay={2000}
      />
    );
  };

  // Validators

  // Screen Design
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ImageBackground
        source={Images.header}
        resizeMode="cover"
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
            {/* <Image
              style={styles.profileImage}
              resizeMode="contain"
              source={Images.profile}
            /> */}
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
            width: '100%',
            // alignItems: 'center',
            top: -80 * heightRef,
            borderRadius: 20 * heightRef,
          },
        ]}>
        <View>
          <MyCarousel />
        </View>
        <View
          style={{
            height: 50 * heightRef,
            width: '90%',
            backgroundColor: 'gray',
            marginVertical: 10 * heightRef,
            borderRadius: 10 * heightRef,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignSelf: 'center',
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
                color: tab == 'En attente' ? colors.background : '#d3d3d3',
                fontWeight: fontWeights.h700,
                fontSize: 12 * heightRef,
              }}>
              En attente
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
                color: tab == 'Terminé' ? colors.background : '#d3d3d3',
                fontWeight: fontWeights.h700,
                fontSize: 12 * heightRef,
              }}>
              Terminé
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.shadow,
            {
              backgroundColor: '#d3d3d3',

              borderRadius: 20 * heightRef,
              paddingBottom: 15 * heightRef,
              paddingTop: 10,
              width: '90%',
              alignSelf: 'center',
            },
          ]}>
          <View
            style={{
              width: '85%',
              height: 20 * heightRef,
              marginTop: 5 * heightRef,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={[
                styles.infoText,
                {color: tab == 'En attente' ? '#22C55E' : '#EF4444'},
              ]}>
              {tab == 'En attente' ? 'En attente' : 'Terminé'}
            </Text>
            <Text style={[styles.infoText3, {color: '#6B7280'}]}>
              N Ref:E1885EFDF
            </Text>
          </View>

          <View
            style={{
              width: '80%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center',
              marginVertical: 10 * heightRef,
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

              <Text style={[styles.infoText3, {marginLeft: 5 * widthRef}]}>
                100 EURO
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={[styles.checkImage2, {height: 14 * heightRef}]}
                resizeMode="contain"
                source={Images.timeIcon}
              />

              <Text style={[styles.infoText3]}>5 Mois</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={[styles.checkImage2, {height: 13 * heightRef}]}
                resizeMode="contain"
                source={Images.peopleIcon}
              />

              <Text style={[styles.infoText3, {marginLeft: 5 * widthRef}]}>
                100
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '85%',
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
                style={styles.checkImage3}
                resizeMode="contain"
                source={Images.wallet2}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={styles.infoText}>{'Contribution'}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.infoText}>100</Text>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: 'gray',
              width: '85%',
              marginVertical: 5 * heightRef,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 10 * heightRef,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={styles.checkImage3}
                resizeMode="contain"
                source={Images.wallet5}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={styles.infoText}>{'Garantie'}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.infoText}>100</Text>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: 'gray',
              width: '85%',
              marginVertical: 5 * heightRef,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 10 * heightRef,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={styles.checkImage3}
                resizeMode="contain"
                source={Images.wallet3}
              />
              <View style={{marginLeft: 10 * widthRef}}>
                <Text style={styles.infoText}>{'Récupéré'}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.infoText}>0</Text>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HistoryPage1Screen;
