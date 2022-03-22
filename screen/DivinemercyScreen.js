import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useTheme } from '@react-navigation/native';
import CardView from 'react-native-cardview';
import {useSelector} from 'react-redux';
const DivinemercyScreen = ({route,navigation}) => {
    const {Title} = route.params;
    const { colors } = useTheme();
    const {isDark} = useSelector(state => state.userReducer);
    const backgroudimage = '../assets/devinemercy.jpg';
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
                    THE DIVINE MERCY PRAYER
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Saint Faustina’s Prayer for Sinners(ALL)
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    O Jesus, eternal Truth, our Life, I call upon You and I beg Your mercy for poor sinners. O sweetest Heart of my Lord, full of pity and unfathomable mercy, I plead with You for poor sinners. O Most Sacred Heart, Fount of Mercy from which gush forth rays of inconceivable graces upon the entire human race, I beg of You light for poor sinners. O Jesus, be mindful of Your own bitter Passion and do not permit the loss of souls redeemed at so dear a price of Your most precious Blood. O Jesus, when I consider the great price of Your Blood, I rejoice at its immensity, for one drop alone would have been enough for the salvation of all sinners. Although sin is an abyss of wickedness and ingratitude, the price paid for us can never be equalled. Therefore, let every soul trust in the Passion of the Lord, and place its hope in His mercy. God will not deny His mercy to anyone. Heaven and earth may change, but God's mercy will never be exhausted. Oh, what immense joy burns in my heart when I contemplate Your incomprehensible goodness, O Jesus! I desire to bring all sinners to Your feet that they may glorify Your mercy throughout endless ages (Diary of Saint Maria Faustina Kowalska, 72).
                    </Text>

                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us.
                    </Text>

                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    O Blood and Water, which gushed forth from the Heart of Jesus as a fount of mercy for us, I trust in You!(X3)
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
                    OUR FATHER
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Our Father, who art in Heaven; hallowed by Thy name; Thy kingdom come; Thy will be
                    done on earth as it is in Heaven.  
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  Give us this day our daily bread; and forgive us our
                    trespasses as we forgive those who trespass against us, and lead us not into temptation;
                    but deliver us from evil. Amen. 
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
                    The APOSTLES CREED(ALL)
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: I believe in God, the Father Almighty, Creator of Heaven and earth; and in Jesus Christ, his
                    only Son, our Lord; who was conceived by the Holy Spirit. born of the Virgin Mary, He
                    suffered under Pontius Pilate, was crucified, died and was buried. He descended into hell;
                    the third day He rose again from the dead; he ascended into Heaven sits at the right hand
                    of God, the Father almighty; from there he will come to judge the living and the dead.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  I believe in the Holy Spirit, the Holy Catholic Church, the Communion of Saints, the forgiveness of sins, the resurrection of the body, and life everlasting, Amen. 
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
                    THE ETERNAL FATHER(ALL)
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Eternal Father, I offer you the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.
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
                        THE FIRST DECADE
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                        THE BEADS(X10)
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: For the sake of His sorrowful Passion.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Have mercy on us and on the whole world.
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
                    THE ETERNAL FATHER(ALL)
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Eternal Father, I offer you the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.
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
                        THE SECOND DECADE
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                        THE BEADS(X10)
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: For the sake of His sorrowful Passion.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Have mercy on us and on the whole world.
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
                    THE ETERNAL FATHER(ALL)
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Eternal Father, I offer you the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.
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
                        THE THIRD DECADE
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                        THE BEADS(X10)
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: For the sake of His sorrowful Passion.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Have mercy on us and on the whole world.
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
                    THE ETERNAL FATHER(ALL)
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Eternal Father, I offer you the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.
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
                        THE FOURTH DECADE
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                        THE BEADS(X10)
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: For the sake of His sorrowful Passion.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Have mercy on us and on the whole world.
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
                    THE ETERNAL FATHER(ALL)
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Eternal Father, I offer you the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.
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
                        THE FIFTH DECADE
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                        THE BEADS(X10)
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: For the sake of His sorrowful Passion.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Have mercy on us and on the whole world.
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
                    HOLY GOD(ALL) (X3)
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.
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
                    CONCLUDING PRAYER(ALL)
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Eternal God, in whom mercy is endless and the treasury of compassion — inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself.

                    O Greatly Merciful God, Infinite Goodness, today all mankind calls out from the abyss of its misery to Your mercy — to Your compassion, O God; and it is with its mighty voice of misery that it cries out. Gracious God, do not reject the prayer of this earth's exiles! O Lord, Goodness beyond our understanding, Who are acquainted with our misery through and through, and know that by our own power we cannot ascend to You, we implore You: anticipate us with Your grace and keep on increasing Your mercy in us, that we may faithfully do Your holy will all through our life and at death's hour. Let the omnipotence of Your mercy shield us from the darts of our salvation’s enemies, that we may with confidence, as Your children, await Your [Son’s] final coming — that day known to You alone. And we expect to obtain everything promised us by Jesus in spite of all our wretchedness. For Jesus is our Hope: through His merciful Heart, as through an open gate, we pass through to heaven (Diary, 1570).
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

export default DivinemercyScreen;