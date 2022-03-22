import React, { useState } from "react";
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from './colors/colors';
import { useSelector } from 'react-redux';

const data = [
  {
    title: 'Communicate sincerely with God',
    text: 'Jesus taught by example that we should pray to God, our Heavenly Father, often. God loves you. He stands ready to help you. Communicate with Him through prayer, express gratitude, and ask for things you need.',
    image: require('../assets/jesus_img.jpg'),
  },
  {
    title: 'Charity and love',
    text: 'Charity is the pure love of Christ. It includes God’s boundless love for all His children. We are to seek to develop that kind of love. As you pray sincerely for the gift of charity, strive to live righteously, and serve others, you will come to feel a sincere concern for the welfare and happiness of other people.',
    image: require('../assets/saint-rita_img.jpg'),
  },
  {
    title: 'Humility',
    text: 'Humility is willingness to submit to the will of the Lord and to give Him the credit for what is accomplished. It includes gratitude for His blessings and acknowledgment of your constant need for His divine help. Humility is not a sign of weakness; it is a sign of spiritual strength.',
    image: require('../assets/pope.png'),
  },
];

const SplashScreen = ({ navigation }) => {
  const { isDark } = useSelector(state => state.userReducer);
  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: isDark ? '#333333' : '#fff' }]}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={[styles.title, { color: isDark ? '#fff' : '#333333' }]}>{item.title}</Text>
          <Text style={[styles.text, { color: isDark ? '#fff' : '#333333' }]}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Image
          source={require('../assets/share.png')}
          style={{ width: 40, height: 30 }}
        />
        {/* <Text style={styles.rightText}>Next</Text> */}
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <LinearGradient
        colors={['#A5C8FF', '#23286B']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Get Started</Text>
      </LinearGradient>

    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Image
          source={require('../assets/back.png')}
          style={{ width: 40, height: 30 }}
        />
        {/* <Text style={styles.leftText}>Prev</Text> */}
      </View>
    );
  };

  const handleDone = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#333333' : '#fff' }}>
      <StatusBar translucent backgroundColor={isDark ? '#333333' : 'transparent'} />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 60,
    width: 150,
    height: 150,
    borderRadius: 150
  },
  title: {
    fontSize: 24,
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    marginHorizontal: 60,
  },
  text: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
    marginHorizontal: 60,
    marginTop: 20,
  },
  dotStyle: {
    backgroundColor: colors.blueFaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  rightText: {
    color: colors.blue,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  leftText: {
    color: colors.blue,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },

  nextButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 100,

  },


  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    color: colors.white,
  },
});

export default SplashScreen;