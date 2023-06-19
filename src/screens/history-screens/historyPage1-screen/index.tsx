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
          data.data.item.name == 'Groupe Publique'
            ? navigation.navigate('HistoryPage2Screen', {
                item: data.data.item,
              })
            : navigation.navigate('HistoryPage3Screen', {
                item: data.data.item,
              });
        }}
        style={[
          {
            // bottom: 5,
            paddingHorizontal: 5 * widthRef,
          },
        ]}>
        <ImageBackground
          // colors={data.data.item.colors}
          source={data.data.item.image}
          resizeMode="stretch"
          imageStyle={{borderRadius: 6}}
          style={[
            styles.shadow,
            {
              backgroundColor: 'pink',
              marginTop: 5 * heightRef,
              borderRadius: 20 * heightRef,
              height: 300 * heightRef,
              paddingHorizontal: 10,
              // width: 195 * widthRef,
              // bottom: 5,
            },
          ]}>
          <Text style={styles.loginText2}>{data.data.item.name}</Text>
          <View
            style={{
              width: '90%',
              // height: 20 * heightRef,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center',
              marginVertical: 10 * heightRef,
            }}>
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
            <Text style={styles.infoText3}>N Ref:E1885EFDF</Text>
          </View>

          {/* <View
            style={{
              height: 0.5,
              backgroundColor: '#D3d3d3',
              width: '95%',
              alignSelf: 'center',
              // top: 8 * heightRef,
              marginVertical: 20 * heightRef,
            }}
          /> */}

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 10,
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
              width: '90%',
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
              width: '90%',
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
      </TouchableOpacity>
    );
  };

  const MyCarousel = () => {
    const data = [
      {
        id: '1',
        title: 'Rejoignez une tontine automatisé',
        name: 'Groupe Publique',
        text: "Enregistrez-vous et laissez le système vous associer à d'autres personnes qui souhaitent former une tontine avec les mêmes préférences que vous.",
        // colors: ['#fcfcfc', '#f7ddc3', '#f0aa65'],
        colors: ['#ffffff', '#ffffff', '#ffffff'],
        image: Images.tontineImg1,
      },
      {
        id: '2',
        title: 'Invitez vos amis dans votre tontine',
        name: 'La Team Hadja',
        text: "Formez votre propre équipe, créer une tontine et invitez vos amis à rejoindre votre communauté. C'est toujours plus amusant en groupe !",
        // colors: ['#fcfcfc', '#e1f7f7', '#8feff2'],
        colors: ['#ffffff', '#ffffff', '#ffffff'],
        image: Images.tontineImg2,
      },
      {
        id: '3',
        title: 'Gérez votre communauté',
        name: 'La Team Hadja',
        text: 'Assumez le rôle de gestionnaire de votre communauté en payant les cotisations, en respectant les échéances et en assurant la gestion de toutes les transactions financières.',
        // colors: ['#fcfcfc', '#fad9df', '#faa0b0'],
        colors: ['#ffffff', '#ffffff', '#ffffff'],
        image: Images.tontineImg3,
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
        autoplay={true}
        activeSlideOffset={30}
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
            backgroundColor: '#F3F4F6',
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
                color: tab == 'En attente' ? colors.background : '#6B7280',
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
                color: tab == 'Terminé' ? colors.background : '#6B7280',
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
              // backgroundColor: 'pink',

              borderRadius: 20 * heightRef,
              paddingBottom: 15 * heightRef,
              paddingTop: 10,
              width: '90%',
              alignSelf: 'center',
            },
          ]}>
          <View
            style={{
              width: '95%',
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
              width: '90%',
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
