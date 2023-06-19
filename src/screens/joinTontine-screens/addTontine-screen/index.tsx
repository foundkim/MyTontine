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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AddTontineScreen = (props: any) => {
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
    <KeyboardAwareScrollView>
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
            onPress={() => {
              navigation.goBack();
            }}
            name={'angle-left'}
            type={IconType.FontAwesome}
            size={30 * heightRef}
            color={'#FFFFFF'}
            style={{top: -2 * heightRef}}
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
          styles.shadow,
          {
            height: fullHeight * 0.8,
            // flex: 1,
            // backgroundColor: colors.error,
            alignSelf: 'center',
            width: '90%',
            alignItems: 'center',
            top: -80 * heightRef,
            borderRadius: 20 * heightRef,
          },
        ]}>
        <Image
          style={styles.checkImage}
          resizeMode="contain"
          source={Images.editTontine}
        />
        <View style={{top: -40 * heightRef, width: '82%', alignSelf: 'center'}}>
          <Text style={styles.loginText2}>
            Rejoins la tontine de ta communauté
          </Text>
          <Text style={styles.loginText2}>
            en rentrant ton numéro d’invitation
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="numéro d’invitation"
            placeholderTextColor={colors.primary}
            keyboardType="numeric"
            textAlign={'center'}
            maxLength={6}
          />
          {password.length == 6 ? (
            <Button
              onPress={() => {
                navigation.navigate('JoinSummaryScreen');
              }}
              buttonText={'Rejoindre'}
              buttonHeight={40 * heightRef}
              buttonWidth={0.8 * fullWidth}
              buttonColor={colors.primary}
              borderColor={colors.primary}
              buttonCorners={20 * heightRef}
              buttonPosition={Alignments.center}
              titleFontStyle={fontWeights.h500}
              buttonstyle={{
                marginVertical: 18 * heightRef,
                // position: 'absolute',
                bottom: -30 * heightRef,
              }}
            />
          ) : null}
        </View>
        <Text
          style={[
            styles.loginText2,
            {position: 'absolute', bottom: 120 * heightRef},
          ]}>
          Rejoins une tontine crée par le système
        </Text>
        <Button
          onPress={() => {
            navigation.navigate('JoinChoiceScreen');
          }}
          buttonText={'Rejoindre'}
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
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddTontineScreen;
