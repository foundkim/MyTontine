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
import {fontSizes} from 'src/config/fontSize';

const ManageAddMemebersScreen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();

  // States
  const [phoneNo, setPhoneNo] = useState('');
  const [code, setCode] = useState('');
  const [show, setShow] = useState('');

  const [noList, setNoList] = useState([]);
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
          height: fullHeight * 0.25,
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
              name={'sharealt'}
              type={IconType.AntDesign}
              size={24 * heightRef}
              color={'#FFFFFF'}
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
        <Text style={styles.loginText2}>Ajouter des membres</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNo}
          value={phoneNo}
          placeholder="+225"
          placeholderTextColor={'#9CA3AF'}
          keyboardType="numeric"
        />
        {show ? (
          <TextInput
            style={styles.input}
            onChangeText={setCode}
            value={code}
            placeholder="Entrez le code"
            placeholderTextColor={'#9CA3AF'}
            maxLength={6}
          />
        ) : null}
        {show ? (
          <Button
            onPress={() => {
              setNoList([...noList, phoneNo]);
              setPhoneNo('');
              setCode('');
              setShow(false);
            }}
            buttonText={'Vérifier le code'}
            buttonHeight={40 * heightRef}
            buttonWidth={0.8 * fullWidth}
            buttonColor={colors.primary}
            borderColor={colors.primary}
            buttonCorners={20 * heightRef}
            buttonPosition={Alignments.center}
            titleFontStyle={fontWeights.h500}
            buttonstyle={{
              marginTop: 10 * heightRef,
            }}
          />
        ) : null}
        {!show & (phoneNo.length > 3) ? (
          <Button
            onPress={() => {
              setShow(true);
            }}
            buttonText={"Envoyer le code d'invitation"}
            buttonHeight={40 * heightRef}
            buttonWidth={0.8 * fullWidth}
            buttonColor={colors.primary}
            borderColor={colors.primary}
            buttonCorners={20 * heightRef}
            buttonPosition={Alignments.center}
            titleFontStyle={fontWeights.h500}
            buttonstyle={{
              marginTop: 10 * heightRef,
            }}
          />
        ) : null}

        <View
          style={{
            // height: 100 * heightRef,
            width: '90%',
            backgroundColor: '#F9FAFB',
            borderRadius: 10 * heightRef,
            marginTop: 15 * heightRef,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <FlatList
            data={noList}
            showsVerticalScrollIndicator={false}
            style={{width: '95%', alignSelf: 'center'}}
            renderItem={({item, index}) => (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.notificationText}>{item}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Button
                      onPress={() => {
                        setNoList(
                          noList.filter(function (i) {
                            return i !== item;
                          }),
                        );
                      }}
                      buttonText={'Supprimer'}
                      buttonHeight={20 * heightRef}
                      buttonWidth={60 * widthRef}
                      buttonColor={colors.error}
                      borderColor={colors.error}
                      buttonCorners={20 * heightRef}
                      buttonPosition={Alignments.center}
                      titleFontSize={fontSizes.f10}
                      titleFontStyle={fontWeights.h500}
                      buttonstyle={{marginLeft: 10}}
                    />
                  </View>
                </View>
                <View
                  style={{
                    height: 1 * heightRef,
                    width: '90%',
                    alignSelf: 'center',
                    backgroundColor: '#D1D5DB',
                    marginVertical: 20 * heightRef,
                  }}
                />
              </View>
            )}
          />

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('PaymentScreen')
            }></TouchableOpacity>
        </View>
      </View>

      <Button
        onPress={() => {
          navigation.navigate('ManageSummaryScreen');
        }}
        buttonText={'Continuer'}
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
          bottom: 20 * heightRef,
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default ManageAddMemebersScreen;
