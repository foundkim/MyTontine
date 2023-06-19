import {StyleSheet} from 'react-native';
import {colors} from 'src/config/colors';
import {fontSizes} from 'src/config/fontSize';
import {fontWeights} from 'src/config/fontWeight';
import {
  fontRef,
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
    // backgroundColor: colors.background,
    backgroundColor: '#224E61',
  },
  topView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: fullHeight * 0.65,
  },
  headImage: {
    height: 230 * heightRef,
  },
  titleImage: {
    height: 28 * heightRef,
    width: 0.5 * fullWidth,
  },
  checkImage: {
    height: 40 * heightRef,
    width: 40 * heightRef,
    marginBottom: 10 * heightRef,
  },
  checkImage3: {
    height: 40 * heightRef,
    width: 40 * heightRef,
  },
  checkImage2: {
    height: 20 * heightRef,
    width: 20 * heightRef,
    tintColor: 'black',
  },
  notificationImage: {
    height: 27 * heightRef,
    width: 28 * heightRef,
    marginLeft: 20 * heightRef,
  },

  profileImage: {
    height: 24 * heightRef,
    width: 24 * heightRef,
    marginLeft: 10 * heightRef,
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
    fontWeight: fontWeights.h700,
    color: colors.black,
    fontSize: fontSizes.f13,
    fontFamily: 'Sen-Regular',
  },
  infoText2: {
    fontWeight: fontWeights.h400,
    color: '#6B7280',
    fontSize: fontSizes.f13,
    fontFamily: 'Sen-Regular',
    marginTop: 3 * heightRef,
  },
  infoText3: {
    fontSize: 12 * fontRef,
    fontWeight: fontWeights.h400,
    fontFamily: 'Sen-Regular',
    color: colors.black,
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
    color: '#d3d3d3',
    textAlign: 'center',
    fontSize: fontSizes.f24,
    marginVertical: 5 * heightRef,
    fontFamily: 'Sen-Regular',
    marginTop: 25 * heightRef,
  },
  loginText2a: {
    fontWeight: fontWeights.h700,
    color: '#D7B875',
    textAlign: 'center',
    fontSize: fontSizes.f17,
    marginTop: 35 * heightRef,
    fontFamily: 'Sen-Regular',
  },
  loginText3: {
    fontWeight: fontWeights.h700,
    color: colors.black,
    textAlign: 'center',
    fontSize: fontSizes.f12,
    marginVertical: 8 * heightRef,
    fontFamily: 'Sen-Regular',
  },
  notificationText: {
    fontWeight: fontWeights.h700,
    color: colors.black,
    // textAlign: 'center',
    fontSize: fontSizes.f15,

    fontFamily: 'Sen-Regular',
  },
  nameText: {
    fontWeight: fontWeights.h700,
    color: colors.background,
    // textAlign: 'center',
    fontSize: fontSizes.f20,

    fontFamily: 'Sen-Regular',
  },
  noText: {
    fontWeight: fontWeights.h400,
    color: '#6B7280',

    fontSize: fontSizes.f12,
    marginTop: 5 * heightRef,
    fontFamily: 'Sen-Regular',
  },
  notificationText2: {
    fontWeight: fontWeights.h400,
    color: '#6B7280',
    // textAlign: 'center',
    fontSize: fontSizes.f12,
    fontFamily: 'Sen-Regular',
    marginTop: 3 * heightRef,
  },
  input: {
    height: 56 * heightRef,
    width: 0.8 * fullWidth,
    borderRadius: 14 * heightRef,
    padding: 10,
    backgroundColor: '#F4F4F4',
    color: 'black',
    marginTop: 20 * heightRef,
    fontFamily: 'Sen-Regular',
    fontSize: fontSizes.f14,
    paddingLeft: 25 * heightRef,
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
  slide: {
    // backgroundColor: 'red',
    borderRadius: 8 * heightRef,

    // marginBottom: 8,
    width: fullWidth - 60 * heightRef,
    height: 125 * heightRef,
  },
});
