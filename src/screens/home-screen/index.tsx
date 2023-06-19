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
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from 'src/config/screenSize';
import Carousel from 'react-native-snap-carousel';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {fontWeights} from 'src/config/fontWeight';

const HomeScreen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  // States
  const [password, setPassword] = useState('');

  // Selectors

  // Effects
  useEffect(() => {}, []);

  useLayoutEffect(() => {}, []);

  // Functions
  const CarouselSlide = (data: any) => {
    console.log('--->', data);
    return (
      <View style={styles.slide}>
        <ImageBackground
          source={Images.infoCard2}
          resizeMode="stretch"
          style={{
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            // paddingHorizontal: 10,
          }}>
          <View style={{paddingHorizontal: 15 * heightRef}}>
            <Text style={[styles.notificationText, {color: '#F9FAFB'}]}>
              {data.data.item.title}
            </Text>
            <Text style={[styles.notificationText2, {color: '#D1D5DB'}]}>
              {data.data.item.text}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const MyCarousel = () => {
    const data = [
      {
        id: '1',
        title: 'Rejoignez une tontine automatisé',
        text: "Enregistrez-vous et laissez le système vous associer à d'autres personnes qui souhaitent former une tontine avec les mêmes préférences que vous.",
      },
      {
        id: '2',
        title: 'Invitez vos amis dans votre tontine',
        text: "Formez votre propre équipe, créer une tontine et invitez vos amis à rejoindre votre communauté. C'est toujours plus amusant en groupe !",
      },
      {
        id: '3',
        title: 'Gérez votre communauté',
        text: 'Assumez le rôle de gestionnaire de votre communauté en payant les cotisations, en respectant les échéances et en assurant la gestion de toutes les transactions financières.',
      },
      // Add more slides as needed
    ];

    return (
      <Carousel
        data={data}
        renderItem={(item: any) => <CarouselSlide data={item} />}
        sliderWidth={fullWidth}
        itemWidth={fullWidth - 60 * heightRef}
        loop={false}
        autoplay={true}
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
          height: fullHeight * 0.31,
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
            name={'ios-reorder-three-outline'}
            type={IconType.Ionicons}
            size={28 * heightRef}
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
            height: 70 * heightRef,
            width: '100%',
            marginTop: 15 * heightRef,
            flexDirection: 'row',
          }}>
          <Image
            style={styles.profileImage}
            resizeMode="contain"
            source={Images.profile}
          />
          <View style={{marginLeft: 10 * widthRef}}>
            <Text style={styles.nameText}>Jayem</Text>
            <Text style={styles.noText}>+225 045545164634</Text>
          </View>
        </View>
      </ImageBackground>
      <View
        style={[
          styles.shadow,
          {
            height: 170 * heightRef,
            // flex: 1,
            // backgroundColor: colors.error,
            width: '90%',
            alignItems: 'center',
            top: -80 * heightRef,
            borderRadius: 20 * heightRef,
          },
        ]}>
        <View style={{}}>
          <Text style={styles.loginText2}>
            Démarrez une tontine seul ou en équipe
          </Text>
          <View
            style={{
              height: 1,
              width: fullWidth * 0.8,
              backgroundColor: '#F2F2F2',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 15 * heightRef,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddTontineScreen')}
              style={{width: 90 * widthRef, alignItems: 'center'}}>
              <Image
                style={styles.checkImage}
                resizeMode="contain"
                source={Images.editTontine}
              />
              <Text style={styles.loginText3}>Rejoindre une tontine</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateNameTontineScreen')}
              style={{width: 80 * widthRef, alignItems: 'center'}}>
              <Image
                style={styles.checkImage}
                resizeMode="contain"
                source={Images.createTontine}
              />
              <Text style={styles.loginText3}>Créer une tontine</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ManageNameTontineScreen')}
              style={{width: 80 * widthRef, alignItems: 'center'}}>
              <Image
                style={styles.checkImage}
                resizeMode="contain"
                source={Images.manageTontine}
              />
              <Text style={styles.loginText3}>Gérer une tontine</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.loginText2a}>Prêt? Tontine, GO!!!!</Text>
        </View>
        <View
          style={{
            height: 70 * heightRef,
            width: '100%',
            backgroundColor: '#E8F5E9',
            borderWidth: 1 * heightRef,
            borderColor: '#81C784',
            borderRadius: 10 * heightRef,
            marginTop: 15 * heightRef,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.notificationImage}
            resizeMode="contain"
            source={Images.notification}
          />
          <View style={{marginLeft: 10 * widthRef}}>
            <Text style={styles.notificationText}>Notification</Text>
            <Text style={styles.notificationText2}>
              Vous avez 1 notification
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.loginText2,
            {marginTop: 35 * heightRef, fontWeight: fontWeights.h300},
          ]}>
          l n’a jamais été aussi fun de faire une tontine
        </Text>
        <View>
          <MyCarousel />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
