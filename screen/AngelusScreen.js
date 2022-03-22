import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useTheme } from '@react-navigation/native';
import CardView from 'react-native-cardview';
import {useSelector} from 'react-redux';
const AngelusScreen = ({route,navigation}) => {
    const {Title} = route.params;
    const { colors } = useTheme();
    const {isDark} = useSelector(state => state.userReducer);
    const backgroudimage = '../assets/angelus.jpg';
    return (
        <View style={[styles.main_container, {backgroundColor: isDark ? '#333333' : '#fff'}]}>
        <StatusBar backgroundColor={isDark ? '#333333' : 'lightblue'} barStyle="light-content"/>
        <View  style={[styles.header, {backgroundColor: isDark ? '#333333' : 'lightblue' }]}>
            <View>
                <TouchableOpacity  onPress={() =>navigation.navigate("DailyPrayerScreen", {Title: "The Daily Prayer"})}>
                    <Image style={{width: 40, height: 30}} source={require('../assets/back.png')} />
                </TouchableOpacity>
            </View>

            <View style={{flex: 1}}>
                <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: isDark ? '#fff' : 'black'}}>{Title}</Text>
            </View>
        </View>
        <View style={styles.container_view}>
        <ImageBackground
        source={require(backgroudimage)} resizeMode="cover" style={styles.image}
        >    
        <ScrollView>
        <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <View style={styles.boxBody}>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    THE ANGELUS
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: The Angel of the Lord declared unto Mary.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: And she conceived by the Holy Spirit.
                    </Text>

                </View>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <View style={styles.boxBody}>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                        THE HAIL MARY
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Hail Mary, full of grace, the Lord is with thee.
                    Blessed art thou among women, and blessed is
                    the fruit of thy womb, Jesus.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Holy Mary, Mother of God, pray for us sinners,
                    now, and at the hour of our death. Amen.
                    </Text>
                </View>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <View style={styles.boxBody}>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Behold the handmaid of the Lord
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Be it done unto me according to Thy word.
                    </Text>
                </View>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <View style={styles.boxBody}>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                        THE HAIL MARY
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Hail Mary, full of grace, the Lord is with thee.
                    Blessed art thou among women, and blessed is
                    the fruit of thy womb, Jesus.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Holy Mary, Mother of God, pray for us sinners,
                    now, and at the hour of our death. Amen.
                    </Text>
                </View>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <View style={styles.boxBody}>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: And the Word was made flesh.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  And dwelt among us.
                    </Text>
                </View>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <View style={styles.boxBody}>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                        THE HAIL MARY
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Hail Mary, full of grace, the Lord is with thee.
                    Blessed art thou among women, and blessed is
                    the fruit of thy womb, Jesus.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Holy Mary, Mother of God, pray for us sinners,
                    now, and at the hour of our death. Amen.
                    </Text>
                </View>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <View style={styles.boxBody}>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Pray for us, O Holy Mother of God.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  That we may be made worthy of the promises of Christ.
                    </Text>
                </View>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <View style={styles.boxBody}>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    LET US PRAY(ALL)
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Pour forth, we beseech Thee, O Lord, Thy grace into our hearts;
                    that we to whom the Incarnation of Christ, Thy Son, was made known by the
                    message of an Angel, may by His Passion and Cross, be brought to the glory
                    of His Resurrection through the same Christ Our Lord. Amen.
                    </Text>
                </View>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <View style={styles.boxBody}>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: May the Divine assistance remain always with us, and may the souls of the faithful departed.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  Through the mercy of GOD, rest in peace. Amen.
                    </Text>
                </View>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <View style={styles.boxBody}>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Most Sacred Heart of JESUS
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Have Mercy on us
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Immaculate Heart of Mary
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for use
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Saint Joseph
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Saint John the Evangelist
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Saint Louis Maria de Montfort
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us
                    </Text>
                </View>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <View style={styles.boxBody}>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    PRAYER TO SAINT MICHEAL THE ARCHANGEL(ALL)
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil; May God rebuke him, we humbly pray; And do thou, O Prince of the Heavenly Host, by the power of God, thrust into hell Satan and all evil spirits who wander through the world for the ruin of souls. Amen.
                    </Text>
                </View>
            </CardView>

        </ScrollView>
        </ImageBackground>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
    },
  
    container_view: {
      margin: 5,
      height: '93%',
    },
  
    box: {
        margin: 5
    },

    boxBody: {
        margin: 5
    },

    boxBodyText: {
        fontSize: 20,
        fontWeight: 'bold',
      },

      boxBodyTextRespond: {
        fontSize: 20,
      },
  
      image: {
        flex: 1,
        justifyContent: "center",
        opacity: .6
      },
  
    
    preference: {
      flex: 1,
      justifyContent: 'center',
      margin: 5
    },
  
    header: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
      },

  view_one:{
      flexDirection: 'row',
      margin: 5,
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  
  text_one: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
  },
  });

export default AngelusScreen;