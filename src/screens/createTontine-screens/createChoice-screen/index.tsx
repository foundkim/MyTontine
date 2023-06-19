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

const CreateChoiceScreen = (props: any) => {
  // Variables
  const navigation = useNavigation<any>();

  // States
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currencyValue, setCurrencyValue] = useState(null);
  const [currencyItems, setCurrencyItems] = useState([
    {value: 'CFA', label: 'CFA', symbol: '$'},
    {value: 'Euros', label: 'Euros', symbol: '€'},
    {value: 'CDF', label: 'CDF', symbol: '£'},
  ]);
  const [ammountOpen, setAmountOpen] = useState(false);
  const [amountValue, setAmountValue] = useState(null);
  const [amountItems, setAmountItems] = useState([
    {label: '1000', value: '1000'},
    {label: '2000', value: '2000'},
    {label: '5000', value: '5000'},
    {label: '10000', value: '10000'},
    {label: '20000', value: '20000'},
    {label: '50000', value: '50000'},
    {label: '100000', value: '100000'},
  ]);

  const [durationOpen, setDurationOpen] = useState(false);
  const [durationValue, setDurationValue] = useState(null);
  const [durationItems, setDurationItems] = useState([
    {label: '5 weeks', value: '5 weeks'},
    {label: '10 weeks', value: '10 weeks'},
    {label: '5 months', value: '5 months'},
    {label: '10 months', value: '10 months'},
  ]);

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
            height: fullHeight,
            // flex: 1,
            // backgroundColor: colors.error,
            width: '90%',
            alignItems: 'center',
            top: -80 * heightRef,
            borderRadius: 20 * heightRef,
          },
        ]}>
        <View style={{}}>
          <Text style={styles.loginText2}>Entrez votre choix</Text>
        </View>
        <View
          style={[
            {
              width: '75%',
              height: 155 * heightRef,
              backgroundColor: 'red',
              borderRadius: 10,
            },
            styles.shadow,
          ]}>
          <View style={{padding: 17 * heightRef}}>
            <Text style={styles.notificationText}>Devise</Text>
            <Text style={styles.noText}>
              Choisissez votre devise préférée :
            </Text>
            <Text style={styles.noText}>
              Sélectionnez la devise que vous souhaitez utiliser pour les
              transactions
            </Text>
          </View>
          <DropDownPicker
            open={currencyOpen}
            value={currencyValue}
            items={currencyItems}
            setOpen={() => setCurrencyOpen(!currencyOpen)}
            onOpen={() => setCurrencyOpen(true)}
            onClose={() => setCurrencyOpen(false)}
            setValue={setCurrencyValue}
            setItems={setCurrencyItems}
            multiple={false}
            zIndex={100}
            placeholder="Select type"
            style={{
              borderColor: colors.darkGray,
              borderRadius: 5 * heightRef,
              minHeight: 34 * heightRef,
              width: '90%',
              alignSelf: 'center',
            }}
            dropDownDirection="BOTTOM"
            placeholderStyle={{
              color: colors.darkGray,
              fontSize: 13 * fontRef,
              fontFamily: 'Sen-Regular',
            }}
            labelStyle={{
              fontSize: 13 * fontRef,
              color: 'black',
              fontFamily: 'Sen-Regular',
            }}
            dropDownContainerStyle={{
              borderColor: colors.darkGray,
              width: '90%',
              alignSelf: 'center',
            }}
          />
        </View>
        <View
          style={[
            {
              width: '75%',
              height: 155 * heightRef,
              backgroundColor: 'red',
              borderRadius: 10,
              marginTop: 20,
              zIndex: -1000,
            },
            styles.shadow,
          ]}>
          <View style={{padding: 17 * heightRef}}>
            <Text style={styles.notificationText}>Cotisation</Text>

            <Text style={styles.noText}>
              Veuillez saisir un montant compris entre 10 000 et 1 000 000.
            </Text>
          </View>
          <DropDownPicker
            open={ammountOpen}
            value={amountValue}
            items={amountItems}
            setOpen={() => setAmountOpen(!ammountOpen)}
            onOpen={() => setAmountOpen(true)}
            onClose={() => setAmountOpen(false)}
            setValue={setAmountValue}
            setItems={setAmountItems}
            multiple={false}
            placeholder="Select type"
            style={{
              borderColor: colors.darkGray,
              borderRadius: 5 * heightRef,
              minHeight: 34 * heightRef,
              width: '90%',
              alignSelf: 'center',
            }}
            dropDownDirection="BOTTOM"
            placeholderStyle={{
              color: colors.darkGray,
              fontSize: 13 * fontRef,
              fontFamily: 'Sen-Regular',
            }}
            labelStyle={{
              fontSize: 13 * fontRef,
              color: 'black',
              fontFamily: 'Sen-Regular',
            }}
            zIndex={10000}
            dropDownContainerStyle={{
              borderColor: colors.darkGray,
              width: '90%',
              alignSelf: 'center',
            }}
          />
        </View>

        <View
          style={[
            {
              width: '75%',
              height: 155 * heightRef,
              backgroundColor: 'red',
              borderRadius: 10,
              marginTop: 20,
              zIndex: -2000,
            },
            styles.shadow,
          ]}>
          <View style={{padding: 17 * heightRef}}>
            <Text style={styles.notificationText}>Durée</Text>

            <Text style={styles.noText}>
              Choisissez votre produit entre 5 semaines, 10 semaines ou 5 mois,
              10 mois
            </Text>
          </View>
          <DropDownPicker
            open={durationOpen}
            value={durationValue}
            items={durationItems}
            setOpen={() => setDurationOpen(!durationOpen)}
            onOpen={() => setDurationOpen(true)}
            onClose={() => setDurationOpen(false)}
            setValue={setDurationValue}
            setItems={setDurationItems}
            multiple={false}
            placeholder="Select type"
            style={{
              borderColor: colors.darkGray,
              borderRadius: 5 * heightRef,
              minHeight: 34 * heightRef,
              width: '90%',
              alignSelf: 'center',
            }}
            dropDownDirection="TOP"
            placeholderStyle={{
              color: colors.darkGray,
              fontSize: 13 * fontRef,
              fontFamily: 'Sen-Regular',
            }}
            // zIndex={100}
            labelStyle={{
              fontSize: 13 * fontRef,
              color: 'black',
              fontFamily: 'Sen-Regular',
            }}
            dropDownContainerStyle={{
              borderColor: colors.darkGray,
              width: '90%',
              alignSelf: 'center',
              maxHeight: 110 * heightRef,
            }}
          />
        </View>
      </View>
      <Button
        onPress={() => {
          navigation.navigate('CreateSummaryScreen');
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

export default CreateChoiceScreen;
