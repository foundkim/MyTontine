import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
import {useNavigation} from '@react-navigation/native';

const SplashScreen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();

  // States
  const [showFull, setShowFull] = useState(false);

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
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Images.main}
        resizeMode="cover"
        style={{
          width: fullWidth,
          height: fullHeight,
        }}>
        <View style={styles.topView}>
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
        </View>
        <View style={styles.bottomView}>
          <View>
            <TouchableOpacity onPress={() => setShowFull(!showFull)}>
              {showFull ? (
                <ImageBackground
                  source={Images.infoCard}
                  resizeMode="contain"
                  style={styles.infoCard}>
                  <View style={styles.infoView}>
                    <Text numberOfLines={10} style={styles.infoText}>
                      My.tontine est un moyen de cotiser en rejoignant une des
                      tontines créer par notre système, ou en créant votre
                      propre tontine et même d’y inviter vos proches. Cette
                      nouvelle expérience digitale vous permet de gérer
                      ,d’organiser vos tontines. Simple, automatisé et
                      sécurisée. Il n’a jamais été aussi simple de faire parti
                      d’une tontine. Tentez l’expérience My.tontine et créez
                      votre communauté ou rejoignez-en une.
                    </Text>
                  </View>
                </ImageBackground>
              ) : (
                <Text style={styles.infoText2}>Comment ça marche?</Text>
              )}
            </TouchableOpacity>

            {/* */}
            <Button
              onPress={() => {
                navigation.navigate('RegisterPhoneNoScreen');
              }}
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
              <Text
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}
                style={styles.loginText2}>
                Se connecter
              </Text>
            </Text>
            <Text
              onPress={() => {
                navigation.navigate('TermsScreen');
              }}
              style={styles.infoText3}>
              les conditions générales CGU
            </Text>
          </View>
        </View>
        {/* </View> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;
