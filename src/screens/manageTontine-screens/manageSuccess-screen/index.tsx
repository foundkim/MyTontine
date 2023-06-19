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
import {CommonActions, useNavigation} from '@react-navigation/native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const ManageSuccessScreen = (props: any) => {
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
            source={Images.success}
          />
          <Text style={styles.heading}>Transaction Réussie</Text>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity disabled>
            {/* <Text style={styles.infoText2}>voir le reçu</Text> */}

            {/* */}
            <Button
              onPress={() => {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 1,
                    routes: [
                      {
                        name: 'TabNavigator',
                      },
                    ],
                  }),
                );
              }}
              buttonText={'Retour acceuil'}
              buttonHeight={40 * heightRef}
              buttonWidth={0.8 * fullWidth}
              buttonColor={colors.primary}
              borderColor={colors.primary}
              buttonCorners={20 * heightRef}
              buttonPosition={Alignments.center}
              titleFontStyle={fontWeights.h500}
              buttonstyle={{marginVertical: 18 * heightRef}}
            />
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ManageSuccessScreen;
