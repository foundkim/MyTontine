import React, {useEffect, useState} from 'react';

import {LogBox, Platform, StatusBar} from 'react-native';
import {colors} from 'src/config/colors';
import MainNavigator from 'src/routes/main-navigator';
import LoginScreen from 'src/screens/login-screen';
import ForgetPasswordScreen from 'src/screens/forgetPassword-screen';
import SplashScreen from 'src/screens/splash-screen';
import HomeScreen from 'src/screens/home-screen';
import ChoiceScreen from 'src/screens/choice-screen';
import SummaryScreen from 'src/screens/summary-screen';
import SuccessScreen from 'src/screens/manageTontine-screens/success-screen';
import PaymentScreen from 'src/screens/payment-screen';
import NameTontineScreen from 'src/screens/manageTontine-screens/nameTontine-screen';
import AddTontineScreen from 'src/screens/joinTontine-screens/addTontine-screen';
import RegisterScreen from 'src/screens/register-screen';
import TransactionScreen from 'src/screens/transaction-screen';
import HistoryPage1Screen from 'src/screens/history-screens/historyPage1-screen';
import HistoryPage2Screen from 'src/screens/history-screens/historyPage2-screen';

function ProviderApp() {
  const [showSplash, setShowSplash] = useState(true);
  const [connect, setConnect] = useState(false);
  const [reachable, setReachable] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 4000);
  }, []);
}

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <>
      <StatusBar backgroundColor={'#224E61'} barStyle="light-content" />
      <MainNavigator />
    </>
  );
}
