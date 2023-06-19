import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Dimensions,
  Image,
  View,
  NativeModules,
  Text,
  Platform,
} from 'react-native';

import {ScaledSheet} from 'react-native-size-matters';
import {fontRef, fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {colors} from 'src/config/colors';
import HomeScreen from 'src/screens/home-screen';
import TransactionScreen from 'src/screens/transaction-screen';
import HistoryPage1Screen from 'src/screens/history-screens/historyPage1-screen';
// import HistoryPage1Screen from 'src/screens/historyPage1-screen';
import {Images} from 'src/assets';
import HelpScreen from 'src/screens/help-screen';

const {PlatformConstants} = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;
const Tab = createBottomTabNavigator();

function TabNavigator(props: any) {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarStyle: styles.lowerBar,
          tabBarLabel: '',
          headerTitle: '',
          tabBarHideOnKeyboard: true,
          headerShown: false,

          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconContainer,
                {borderColor: focused ? colors.primary : 'transparent'},
              ]}>
              <Icon
                name={'home-filled'}
                type={IconType.MaterialIcons}
                size={24 * heightRef}
                color={focused ? colors.primary : colors.grey300}
                style={{marginBottom: 5 * heightRef}}
              />
              <Text style={focused ? styles.labelTextActive : styles.labelText}>
                Acceuil
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HistoryPage1Screen"
        component={HistoryPage1Screen}
        options={{
          tabBarStyle: styles.lowerBar,
          tabBarHideOnKeyboard: true,
          tabBarLabel: '',
          headerTitle: '',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconContainer,
                {borderColor: focused ? colors.primary : 'transparent'},
              ]}>
              <Image
                style={{
                  height: 24 * heightRef,
                  marginBottom: 5 * heightRef,
                  tintColor: focused ? colors.primary : colors.grey300,
                }}
                resizeMode="contain"
                source={Images.tabTontines}
              />
              <Text style={focused ? styles.labelTextActive : styles.labelText}>
                Mes Tontines
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TransactionScreen"
        component={TransactionScreen}
        options={{
          tabBarStyle: styles.lowerBar,
          tabBarLabel: '',
          headerTitle: '',
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconContainer,
                {borderColor: focused ? colors.primary : 'transparent'},
              ]}>
              {/* <Icon
                name={'ios-stats-chart-sharp'}
                type={IconType.MaterialCommunityIcons}
                size={20 * heightRef}
                color={focused ? colors.primary : colors.grey300}
                style={{marginBottom: 5 * heightRef}}
              /> */}
              <Image
                style={{
                  height: 24 * heightRef,
                  marginBottom: 5 * heightRef,
                  tintColor: focused ? colors.primary : colors.grey300,
                }}
                resizeMode="contain"
                source={Images.tabStats}
              />
              <Text style={focused ? styles.labelTextActive : styles.labelText}>
                Transactions
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          tabBarStyle: styles.lowerBar,
          tabBarLabel: '',
          headerTitle: '',
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.iconContainer,
                {borderColor: focused ? colors.primary : 'transparent'},
              ]}>
              {/* <Icon
                name={'ios-stats-chart-sharp'}
                type={IconType.MaterialCommunityIcons}
                size={20 * heightRef}
                color={focused ? colors.primary : colors.grey300}
                style={{marginBottom: 5 * heightRef}}
              /> */}
              <Image
                style={{
                  height: 24 * heightRef,
                  marginBottom: 5 * heightRef,
                  tintColor: focused ? colors.primary : colors.grey300,
                }}
                resizeMode="contain"
                source={Images.tabHelp}
              />
              <Text style={focused ? styles.labelTextActive : styles.labelText}>
                Aide
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = ScaledSheet.create({
  lightText: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '500',
    color: '#8E8E8E',
  },
  boldText: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '500',
  },
  normalText: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '100',
  },
  lowerBar: {
    height: '9%',
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: Platform.OS == 'android' ? 0 : 10,

    borderTopWidth: 0.5,
  },
  icons: {
    height: 15,
    width: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90 * heightRef,
    top: 10,
    width: 0.25 * fullWidth,
    // backgroundColor: 'red',
    borderColor: 'pink',
    borderTopWidth: 0,
  },
  labelText: {
    fontWeight: '400',
    fontSize: 10 * fontRef,
    textAlign: 'center',
    color: colors.grey300,
    marginBottom: 5 * heightRef,
  },
  labelTextActive: {
    fontWeight: '400',
    fontSize: 10 * fontRef,
    textAlign: 'center',
    color: colors.primary,
    marginBottom: 5 * heightRef,
  },
});

export default TabNavigator;
