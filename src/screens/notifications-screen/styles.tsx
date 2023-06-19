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
  },
  titleImage: {
    height: 55 * heightRef,
    width: 55 * heightRef,
    marginTop: 20 * heightRef,
  },
  checkImage: {
    height: 46 * heightRef,
    width: 46 * heightRef,
  },
  notificationImage: {
    height: 28 * heightRef,
    width: 28 * heightRef,
    marginLeft: 15 * heightRef,
    tintColor: colors.success,
  },
  notificationImage2: {
    height: 28 * heightRef,
    width: 28 * heightRef,
    marginLeft: 15 * heightRef,
    tintColor: colors.grey300,
  },

  profileImage: {
    height: 40 * heightRef,
    width: 40 * heightRef,
  },

  heading: {
    fontWeight: fontWeights.h600,
    fontSize: fontSizes.f20,
    textAlign: 'center',
    marginHorizontal: '15%',
    color: colors.background,
    fontFamily: 'Sen-Regular',
    marginTop: 5 * heightRef,
  },
  heading2: {
    fontWeight: fontWeights.h700,
    fontSize: fontSizes.f12,
    textAlign: 'center',
    marginHorizontal: '2%',
    color: '#D3d3d3',
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
    fontWeight: fontWeights.h400,
    color: '#4B5563',
    fontSize: fontSizes.f12,
    marginVertical: 15 * heightRef,
    fontFamily: 'Sen-Regular',
    alignSelf: 'flex-start',
    marginLeft: '5%',
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
    fontSize: fontSizes.f12,
    marginTop: 2 * heightRef,
    fontFamily: 'Sen-Regular',
  },
  notificationText2: {
    fontWeight: fontWeights.h400,
    color: colors.black,
    // textAlign: 'center',
    fontSize: fontSizes.f15,
    marginTop: 5 * heightRef,
    fontFamily: 'Sen-Regular',
    marginLeft: 20 * widthRef,
  },
  nameText: {
    fontWeight: fontWeights.h400,
    color: colors.black,
    // textAlign: 'center',
    fontSize: fontSizes.f16,
    marginLeft: 5 * widthRef,
    fontFamily: 'Sen-Regular',
  },
  noText: {
    fontWeight: fontWeights.h400,
    color: colors.black,
    fontSize: fontSizes.f12,
    marginTop: 5 * heightRef,
    fontFamily: 'Sen-Regular',
  },
  notificationText2: {
    fontWeight: fontWeights.h400,
    color: '#6B7280',
    // textAlign: 'center',
    fontSize: fontSizes.f10,
    fontFamily: 'Sen-Regular',
    marginTop: 0 * heightRef,
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
