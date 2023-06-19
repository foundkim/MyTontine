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
} from 'react-native';
import {styles} from './styles';
import {Images} from 'src/assets';
import {
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from 'src/config/screenSize';
import Button, {Alignments} from 'src/components/button';
import {fontWeights} from 'src/config/fontWeight';
import {colors} from 'src/config/colors';
import {fontSizes} from 'src/config/fontSize';
import Header from 'src/components/head';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {useNavigation} from '@react-navigation/native';

const EditProfileScreen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();

  // States
  const [password, setPassword] = useState('');

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
        <Image
          style={styles.titleImage}
          resizeMode="contain"
          source={Images.heading}
        />
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
        <Image
          style={styles.checkImage}
          resizeMode="contain"
          source={Images.userIcon}
        />
        <View style={{top: -40 * heightRef}}>
          <Text style={styles.loginText2}>Informations personnelles</Text>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Nom"
              placeholderTextColor={'#9CA3AF'}
              keyboardType="numeric"
            />
            <Icon
              onPress={() => {}}
              name={'person-outline'}
              type={IconType.MaterialIcons}
              size={20 * heightRef}
              color={'#9CA3AF'}
              style={{
                bottom: 18 * heightRef,
                zIndex: 100,
                position: 'absolute',
                left: 10 * widthRef,
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Prénoms"
              placeholderTextColor={'#9CA3AF'}
            />
            <Icon
              onPress={() => {}}
              name={'account-multiple-outline'}
              type={IconType.MaterialCommunityIcons}
              size={20 * heightRef}
              color={'#9CA3AF'}
              style={{
                bottom: 18 * heightRef,
                zIndex: 100,
                position: 'absolute',
                left: 10 * widthRef,
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Email"
              placeholderTextColor={'#9CA3AF'}
              keyboardType="numeric"
            />
            <Icon
              onPress={() => {}}
              name={'email-outline'}
              type={IconType.MaterialCommunityIcons}
              size={20 * heightRef}
              color={'#9CA3AF'}
              style={{
                bottom: 18 * heightRef,
                zIndex: 100,
                position: 'absolute',
                left: 10 * widthRef,
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Ex: 01/01/2005"
              placeholderTextColor={'#9CA3AF'}
            />
            <Icon
              onPress={() => {}}
              name={'calendar-blank-outline'}
              type={IconType.MaterialCommunityIcons}
              size={20 * heightRef}
              color={'#9CA3AF'}
              style={{
                bottom: 18 * heightRef,
                zIndex: 100,
                position: 'absolute',
                left: 10 * widthRef,
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Âge"
              placeholderTextColor={'#9CA3AF'}
            />
            <Icon
              onPress={() => {}}
              name={'calendar-blank-outline'}
              type={IconType.MaterialCommunityIcons}
              size={20 * heightRef}
              color={'#9CA3AF'}
              style={{
                bottom: 18 * heightRef,
                zIndex: 100,
                position: 'absolute',
                left: 10 * widthRef,
              }}
            />
          </View>
        </View>
      </View>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        buttonText={'Modifier'}
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
          bottom: 30 * heightRef,
        }}
      />

      {/* <View style={styles.topView}>
          <Image
            style={styles.headImage}
            resizeMode="contain"
            source={Images.head}
          />
          <Image
            style={styles.IllustrateImage}
            resizeMode="contain"
            source={Images.Illustration}
          />
        </View> */}
      {/* <View style={styles.bottomView}>
          <TouchableOpacity onPress={() => setShowFull(!showFull)}>
            {showFull ? (
              <ImageBackground
                source={Images.infoCard}
                resizeMode="contain"
                style={styles.infoCard}>
                <View style={styles.infoView}>
                  <Text numberOfLines={10} style={styles.infoText}>
                    My.tontine est un moyen de cotiser en rejoignant une des
                    tontines créer par notre système, ou en créant votre propre
                    tontine et même d’y inviter vos proches. Cette nouvelle
                    expérience digitale vous permet de gérer ,d’organiser vos
                    tontines. Simple, automatisé et sécurisée. Il n’a jamais été
                    aussi simple de faire parti d’une tontine. Tentez
                    l’expérience My.tontine et créez votre communauté ou
                    rejoignez-en une.
                  </Text>
                </View>
              </ImageBackground>
            ) : (
              <Text style={styles.infoText2}>Comment ça marche?</Text>
            )}

      
            <Button
              onPress={() => {}}
              buttonText={'S’inscrire'}
              buttonHeight={40 * heightRef}
              buttonWidth={0.8 * fullWidth}
              buttonColor={colors.primary}
              borderColor={colors.primary}
              buttonCorners={20 * heightRef}
              buttonPosition={Alignments.center}
              titleFontStyle={fontWeights.h500}
              buttonstyle={{marginVertical: 18 * heightRef}}
            />
            <Text style={styles.loginText1}>
              Déjà utilisateur?{' '}
              <Text style={styles.loginText2}>Se connecter</Text>
            </Text>
          </TouchableOpacity>
        </View> */}
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;
