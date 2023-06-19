import * as React from 'react';
import SplashScreen from 'src/screens/splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'src/screens/login-screen';
import ForgetPasswordScreen from 'src/screens/forgetPassword-screen';

import HomeScreen from 'src/screens/home-screen';
import ChoiceScreen from 'src/screens/choice-screen';
import SummaryScreen from 'src/screens/summary-screen';
import PaymentScreen from 'src/screens/payment-screen';
import AddTontineScreen from 'src/screens/joinTontine-screens/addTontine-screen';
import RegisterScreen from 'src/screens/register-screen';
import TransactionScreen from 'src/screens/transaction-screen';
import HistoryPage1Screen from 'src/screens/history-screens/historyPage1-screen';
import HistoryPage2Screen from 'src/screens/history-screens/historyPage2-screen';
import PasswordScreen from 'src/screens/password-screen';
import RegisterPhoneNoScreen from 'src/screens/registerPhoneNo-screen';
import VerificationScreen from 'src/screens/verification-screen';
import RegisterVerificationScreen from 'src/screens/registerVerification-screen';
import UploadPicScreen from 'src/screens/uploadPic-screen';
import TabNavigator from './tab-navigator';
import SettingsScreen from 'src/screens/settings-screen';
import ChooseMethodScreen from 'src/screens/chooseMethod-screen';
import JoinSuccessScreen from 'src/screens/joinTontine-screens/joinSuccess-screen';
import JoinPaymentScreen from 'src/screens/joinTontine-screens/joinPayment-screen';
import JoinSummaryScreen from 'src/screens/joinTontine-screens/joinSummary-screen';
import CreateNameTontineScreen from 'src/screens/createTontine-screens/createNameTontine-screen';
import CreateChoiceScreen from 'src/screens/createTontine-screens/createChoice-screen';
import CreateSummaryScreen from 'src/screens/createTontine-screens/createSummary-screen';
import CreateSuccessScreen from 'src/screens/createTontine-screens/createSuccess-screen';
import DeleteAccountScreen from 'src/screens/deleteAccount-screen';
import EditProfileScreen from 'src/screens/editProfile-screen';
import Payment2Screen from 'src/screens/payment2-screen';
import TermsScreen from 'src/screens/terms-screen';
import NotificationsScreen from 'src/screens/notifications-screen';
import ChangePasswordScreen from 'src/screens/changePassword-screen';
import ManageNameTontineScreen from 'src/screens/manageTontine-screens/manageNameTontine-screen';
import ManageChoiceScreen from 'src/screens/manageTontine-screens/manageChoice-screen';
import ManageAddMemebersScreen from 'src/screens/manageTontine-screens/manageAddMemebers';
import ManageSummaryScreen from 'src/screens/manageTontine-screens/manageSummary-screen';
import ManageSuccessScreen from 'src/screens/manageTontine-screens/manageSuccess-screen';
import HistoryPage3Screen from 'src/screens/history-screens/historyPage3-screen';
import FailScreen from 'src/screens/failTransaction-screen';
import JoinChoiceScreen from 'src/screens/joinTontine-screens/joinChoice-screen';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PasswordScreen"
          component={PasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterPhoneNoScreen"
          component={RegisterPhoneNoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterVerificationScreen"
          component={RegisterVerificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UploadPicScreen"
          component={UploadPicScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChooseMethodScreen"
          component={ChooseMethodScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddTontineScreen"
          component={AddTontineScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SummaryScreen"
          component={SummaryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JoinSuccessScreen"
          component={JoinSuccessScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JoinPaymentScreen"
          component={JoinPaymentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JoinSummaryScreen"
          component={JoinSummaryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateNameTontineScreen"
          component={CreateNameTontineScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateChoiceScreen"
          component={CreateChoiceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateSummaryScreen"
          component={CreateSummaryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateSuccessScreen"
          component={CreateSuccessScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DeleteAccountScreen"
          component={DeleteAccountScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment2Screen"
          component={Payment2Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermsScreen"
          component={TermsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HistoryPage2Screen"
          component={HistoryPage2Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageNameTontineScreen"
          component={ManageNameTontineScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageChoiceScreen"
          component={ManageChoiceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageAddMemebersScreen"
          component={ManageAddMemebersScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageSummaryScreen"
          component={ManageSummaryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageSuccessScreen"
          component={ManageSuccessScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HistoryPage3Screen"
          component={HistoryPage3Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FailScreen"
          component={FailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JoinChoiceScreen"
          component={JoinChoiceScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
