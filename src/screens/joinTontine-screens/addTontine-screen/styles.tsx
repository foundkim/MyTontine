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
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  topView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: fullHeight * 0.65,
  },
  headImage: {
    height: 230 * heightRef,
    width: 0.9 * fullWidth,
  },

  profileImage: {
    height: 24 * heightRef,
    width: 24 * heightRef,
    marginLeft: 10 * heightRef,
  },
  titleImage: {
    height: 28 * heightRef,
    width: 0.5 * fullWidth,
  },
  checkImage: {
    height: 140 * heightRef,
    width: 140 * heightRef,
    top: -50 * heightRef,
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
  },
  infoText: {
    fontWeight: fontWeights.h500,
    color: '#A3C55A',
    textAlign: 'center',
    fontSize: fontSizes.f10,
    marginTop: 20 * heightRef,
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
    fontFamily: 'Sen-Regular',
  },
  loginText1: {
    fontWeight: fontWeights.h400,
    color: '#4DA0FF',
    textAlign: 'center',
    fontSize: fontSizes.f12,
    fontFamily: 'Sen-Regular',
    marginTop: 10,
  },
  loginText2: {
    fontWeight: fontWeights.h700,
    color: colors.black,
    textAlign: 'center',
    fontSize: fontSizes.f15,
    // marginBottom: 20 * heightRef,
    fontFamily: 'Sen-Regular',
  },
  input: {
    height: 45 * heightRef,
    width: 0.8 * fullWidth,
    borderRadius: 14 * heightRef,
    padding: 10,
    backgroundColor: '#F4F4F4',
    color: colors.primary,
    marginTop: 20 * heightRef,
    fontFamily: 'Sen-Regular',
    fontSize: fontSizes.f14,
    paddingLeft: 25 * heightRef,
    alignSelf: 'center',
  },
  shadow: {
    shadowColor: colors.grey250,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,

    backgroundColor: colors.background,
  },
});
