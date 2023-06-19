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

const ChoiceScreen = (props: any) => {
  // Variables

  // States
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currencyValue, setCurrencyValue] = useState(null);
  const [currencyItems, setCurrencyItems] = useState([
    {value: 'USD', label: 'United States Dollar', symbol: '$'},
    {value: 'EUR', label: 'Euro', symbol: '€'},
    {value: 'GBP', label: 'British Pound Sterling', symbol: '£'},
    {value: 'JPY', label: 'Japanese Yen', symbol: '¥'},
    {value: 'AUD', label: 'Australian Dollar', symbol: '$'},
    {value: 'CAD', label: 'Canadian Dollar', symbol: '$'},
    {value: 'CHF', label: 'Swiss Franc', symbol: 'Fr'},
    {value: 'CNY', label: 'Chinese Yuan', symbol: '¥'},
    {value: 'SEK', label: 'Swedish Krona', symbol: 'kr'},
    {value: 'NZD', label: 'New Zealand Dollar', symbol: '$'},
    {value: 'BRL', label: 'Brazilian Real', symbol: 'R$'},
    {value: 'INR', label: 'Indian Rupee', symbol: '₹'},
    {value: 'RUB', label: 'Russian Ruble', symbol: '₽'},
    {value: 'ZAR', label: 'South African Rand', symbol: 'R'},
    {value: 'MXN', label: 'Mexican Peso', symbol: '$'},
    {value: 'SGD', label: 'Singapore Dollar', symbol: '$'},
    {value: 'HKD', label: 'Hong Kong Dollar', symbol: '$'},
    {value: 'NOK', label: 'Norwegian Krone', symbol: 'kr'},
    {value: 'TRY', label: 'Turkish Lira', symbol: '₺'},
    {value: 'KRW', label: 'South Korean Won', symbol: '₩'},
    {value: 'DKK', label: 'Danish Krone', symbol: 'kr'},
    {value: 'PLN', label: 'Polish Złoty', symbol: 'zł'},
    {value: 'THB', label: 'Thai Baht', symbol: '฿'},
    {value: 'IDR', label: 'Indonesian Rupiah', symbol: 'Rp'},
    {value: 'HUF', label: 'Hungarian Forint', symbol: 'Ft'},
    {value: 'CZK', label: 'Czech Koruna', symbol: 'Kč'},
    {value: 'ILS', label: 'Israeli Shekel', symbol: '₪'},
    {value: 'CLP', label: 'Chilean Peso', symbol: '$'},
    {value: 'PHP', label: 'Philippine Peso', symbol: '₱'},
    {value: 'AED', label: 'United Arab Emirates Dirham', symbol: 'د.إ'},
    {value: 'MYR', label: 'Malaysian Ringgit', symbol: 'RM'},
    {value: 'RON', label: 'Romanian Leu', symbol: 'lei'},
    {value: 'ARS', label: 'Argentine Peso', symbol: '$'},
    {value: 'COP', label: 'Colombian Peso', symbol: '$'},
  ]);
  const [ammountOpen, setAmountOpen] = useState(false);
  const [amountValue, setAmountValue] = useState(null);
  const [amountItems, setAmountItems] = useState([
    {label: '500', value: '500'},
    {label: '1000', value: '1000'},
    {label: '1500', value: '1500'},
    {label: '2000', value: '2000'},
    {label: '2500', value: '2500'},
    {label: '3000', value: '3000'},
    {label: '3500', value: '3500'},
    {label: '4000', value: '4000'},
    {label: '4500', value: '4500'},
    {label: '5000', value: '5000'},
    {label: '5500', value: '5500'},
    {label: '6000', value: '6000'},
    {label: '6500', value: '6500'},
    {label: '7000', value: '7000'},
    {label: '7500', value: '7500'},
    {label: '8000', value: '8000'},
    {label: '8500', value: '8500'},
    {label: '9000', value: '9000'},
    {label: '9500', value: '9500'},
    {label: '10000', value: '10000'},
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
            onPress={() => {}}
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
              sélectionnez le type d'argent que vous souhaitez utiliser pour les
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
            <Text style={styles.notificationText}>Devise</Text>
            <Text style={styles.noText}>
              Choisissez votre devise préférée :
            </Text>
            <Text style={styles.noText}>
              sélectionnez le type d'argent que vous souhaitez utiliser pour les
              transactions
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
            <Text style={styles.notificationText}>Devise</Text>
            <Text style={styles.noText}>
              Choisissez votre devise préférée :
            </Text>
            <Text style={styles.noText}>
              sélectionnez le type d'argent que vous souhaitez utiliser pour les
              transactions
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
              maxHeight: 120 * heightRef,
            }}
          />
        </View>
      </View>
      <Button
        onPress={() => {}}
        buttonText={'Fait'}
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

export default ChoiceScreen;
