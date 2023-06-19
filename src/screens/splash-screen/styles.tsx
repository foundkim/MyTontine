import {StyleSheet} from 'react-native';
import {colors} from 'src/config/colors';
import {fontSizes} from 'src/config/fontSize';
import {fontWeights} from 'src/config/fontWeight';
import {
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from 'src/config/screenSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F6780',
  },
  topView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: fullHeight * 0.55,
  },
  headImage: {
    height: 230 * heightRef,
    width: 0.9 * fullWidth,
  },
  IllustrateImage: {
    height: 238 * heightRef,
    width: 0.8 * fullWidth,
  },
  heading: {
    fontWeight: fontWeights.h600,
    fontSize: fontSizes.f27,
    textAlign: 'center',
    marginHorizontal: '15%',
    color: colors.black,
  },
  heading2: {
    fontWeight: fontWeights.h600,
    fontSize: fontSizes.f28,
    textAlign: 'center',
    marginHorizontal: '10%',
    color: '#9FE870',
  },
  bottomView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoCard: {
    width: 0.9 * fullWidth,
    height: 140 * heightRef,
  },
  infoView: {
    width: 0.85 * fullWidth,
    height: 140 * heightRef,
    justifyContent: 'center',
  },
  infoText: {
    fontWeight: fontWeights.h500,
    color: '#A3C55A',
    textAlign: 'center',
    fontSize: fontSizes.f10,
    // marginTop: 20 * heightRef,
    marginLeft: 10 * widthRef,
    maxWidth: '85%',
    alignSelf: 'center',
  },
  infoText2: {
    fontWeight: fontWeights.h500,
    color: '#A3C55A',
    textAlign: 'center',
    fontSize: fontSizes.f13,
    textDecorationLine: 'underline',
  },
  infoText3: {
    fontWeight: fontWeights.h500,
    color: '#A3C55A',
    textAlign: 'center',
    fontSize: fontSizes.f10,
    marginTop: 5 * heightRef,
  },
  loginText1: {
    fontWeight: fontWeights.h400,
    color: '#D1D5DB',
    textAlign: 'center',
    fontSize: fontSizes.f12,
  },
  loginText2: {
    fontWeight: fontWeights.h400,
    color: '#F9FAFB',
    textAlign: 'center',
    fontSize: fontSizes.f13,
    textDecorationLine: 'underline',
  },
});
