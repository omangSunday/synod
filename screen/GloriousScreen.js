import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useTheme } from '@react-navigation/native';
import CardView from 'react-native-cardview';
import {useSelector} from 'react-redux';
const GloriousScreen = ({route,navigation}) => {
    const {Title} = route.params;
    const { colors } = useTheme();
    const {isDark} = useSelector(state => state.userReducer);
    const backgroudimage = '../assets/rosary.png';
    return (
        <View style={[styles.main_container, {backgroundColor: isDark ? '#333333' : '#fff'}]}>
        <StatusBar backgroundColor={isDark ? '#333333' : 'lightblue'} barStyle="light-content"/>
        <View  style={[styles.header, {backgroundColor: isDark ? '#333333' : 'lightblue' }]}>
            <View>
                <TouchableOpacity  onPress={() =>navigation.navigate("RosaryMistryScreen", {Title: "Rosary Mysteries"})}>
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
                        Step One
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    The Sign Of The Cross
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    In the name of the Father, and of the Son, and of the Holy Spirit. Amen. 
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
                        Step Two
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    The rosary intention
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Come O Holy Spirit and fill the hearts of the faithful 
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: And endkindle in them the fire of your love
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Send forth your spirit and they shall be created
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: And thou shalt renew the face of the earth
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
                        Step Three
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Let us pray
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: O GOD who by the light of the HOLY SPIRIT, did instruct the hearts of the faithful, grant that by the same SPIRIT we may be truly wise, and ever rejoise un HIS consolation through CHRIST our LORD. Amen.
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
                        Step Four
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: You O LORD, Will open my lips
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: And my tongue shall announce THY praise
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Incline unto my aid O GOD
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: O LORD, make haste to help me 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Glory be to the Father and to the Son and to the HOLY SPIRIT
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: As it was in the beginning, is now and ever shall be, world without end. Amen 
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
                        Step Five
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    The Apostles Creed 
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
                        Step Six
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Our Father
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
                        Step Seven
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Hail Mary: (X3)
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women and blessed is the fruit of thy womb, Jesus. 
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  Holy Mary, mother of God, pray for us sinners now and at
                    the hour of our death. Amen. 
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
                        Step Eight
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Glory Be
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Glory be to the Father, to the Son and to the Holy Spirit. 
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  As it was in the beginning is now and ever shall be, world without end, Amen. 
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
                        Step Nine
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    O! My Jesus
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    All: O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of your Mercy. Amen.  
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
                        Step Ten
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: JESUS have mercy on us
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Virgin MARY com to our aid
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: May the souls of all the faithful departed.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Through the Mercy of GOD rest in peace 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Amen.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: May their souls rest in peace
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Amen.
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
                        Step Eleven
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    THE FIRST GLORIOUS MYSTERY
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    THE RESURRECTION
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Jesus rises glorious and immortal, three days after His death.
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
                        Step Twelve
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Our Father
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
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Hail Mary: (X10)
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women and blessed is the fruit of thy womb, Jesus. 
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  Holy Mary, mother of God, pray for us sinners now and at
                    the hour of our death. Amen. 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Glory Be
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Glory be to the Father, to the Son and to the Holy Spirit. 
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  As it was in the beginning is now and ever shall be, world without end, Amen. 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    O! My Jesus
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    All: O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of your Mercy. Amen.  
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: JESUS have mercy on us
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Virgin MARY com to our aid
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: May the souls of all the faithful departed.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Through the Mercy of GOD rest in peace 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Amen.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: May their souls rest in peace
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Amen.
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
                        Step Thirteen
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    THE SECOND GLORIOUS MYSTERY
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    THE ASCENSION
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Jesus ascends into Heaven forty days after His Resurrection. 
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
                        Step Fourteen
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Our Father
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
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Hail Mary: (X10)
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women and blessed is the fruit of thy womb, Jesus. 
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  Holy Mary, mother of God, pray for us sinners now and at
                    the hour of our death. Amen. 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Glory Be
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Glory be to the Father, to the Son and to the Holy Spirit. 
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  As it was in the beginning is now and ever shall be, world without end, Amen. 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    O! My Jesus
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    All: O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of your Mercy. Amen.  
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: JESUS have mercy on us
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Virgin MARY com to our aid
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: May the souls of all the faithful departed.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Through the Mercy of GOD rest in peace 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Amen.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: May their souls rest in peace
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Amen.
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
                        Step Fifteen
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    THE THIRD GLORIOUS MYSTERY
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    DESCENT OF THE HOLY SPIRIT
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    The Holy Spirit descends upon Mary and the Apostles.  
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
                        Step Sixteen
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Our Father
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
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Hail Mary: (X10)
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women and blessed is the fruit of thy womb, Jesus. 
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  Holy Mary, mother of God, pray for us sinners now and at
                    the hour of our death. Amen. 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Glory Be
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Glory be to the Father, to the Son and to the Holy Spirit. 
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  As it was in the beginning is now and ever shall be, world without end, Amen. 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    O! My Jesus
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    All: O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of your Mercy. Amen.  
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: JESUS have mercy on us
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Virgin MARY com to our aid
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: May the souls of all the faithful departed.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Through the Mercy of GOD rest in peace 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Amen.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: May their souls rest in peace
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Amen.
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
                        Step Seventeen
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    THE FORTH GLORIOUS MYSTERY
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    THE ASSUMPTION
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    The Blessed Mother is united with her Divine Son in Heaven.    
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
                        Step Eighteen
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Our Father
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
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Hail Mary: (X10)
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women and blessed is the fruit of thy womb, Jesus. 
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  Holy Mary, mother of God, pray for us sinners now and at
                    the hour of our death. Amen. 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Glory Be
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Glory be to the Father, to the Son and to the Holy Spirit. 
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  As it was in the beginning is now and ever shall be, world without end, Amen. 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    O! My Jesus
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    All: O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of your Mercy. Amen.  
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: JESUS have mercy on us
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Virgin MARY com to our aid
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: May the souls of all the faithful departed.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Through the Mercy of GOD rest in peace 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Amen.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: May their souls rest in peace
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Amen.
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
                        Step Nineteen
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    THE FIFTH GLORIOUS MYSTERY
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                        THE FINDING IN THE TEMPLE
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Mary is gloriously crowned Queen of Heaven and earth.   
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
                        Step Twenty
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Our Father
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
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Hail Mary: (X10)
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women and blessed is the fruit of thy womb, Jesus. 
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  Holy Mary, mother of God, pray for us sinners now and at
                    the hour of our death. Amen. 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Glory Be
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Glory be to the Father, to the Son and to the Holy Spirit. 
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:  As it was in the beginning is now and ever shall be, world without end, Amen. 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    O! My Jesus
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    All: O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of your Mercy. Amen.  
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: JESUS have mercy on us
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Virgin MARY com to our aid
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: May the souls of all the faithful departed.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Through the Mercy of GOD rest in peace 
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Amen.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: May their souls rest in peace
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Amen.
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
                    Hail, Holy Queen (ALL)
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Hail, Holy Queen, Mother of Mercy, our life, our sweetness and our hope.
                    To thee we cry, poor banished children of Eve.
                    To thee do we send up our sighs, mourning and weeping in this valley of tears.
                    Turn then most gracious advocate, thine eyes of mercy towards us,
                    And after this our exile, show unto us the blessed Fruit of they womb, Jesus.
                    O clement. O loving, O sweet Virgin Mary.
                    Pray for us, O holy Mother of God
                    That we may be made worthy of the promises of Christ.   
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Pray fpr us O HOLY Mother of GOD
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                        Response: That we may be made worthy of the promises of CHRIST 
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
                    LET US PRAY (ALL)
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    O GOD, whose only begotten Son, by HIS life, death and resurrection has purchased foe us the rewards of eternal salvation, grant we beseech you, that meditating upon these mysteries in the Most HOLY ROSARY of the Blisses Virgin Mary, we may imitate what they contain and obtain what they promise, through the same CHRIST our Lord.
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
                    THE LITANY OF THE BLESSED VIRGIN MARY
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Lord, have mercy on us.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Lord, have mercy on us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Christ, have mercy on us.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Christ, have mercy on us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Lord, have mercy on us.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Lord, have mercy on us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Christ, hear us.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Christ, graciously hear us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: God the Father of Heaven
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Have mercy on us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: God the Son, Redeemer of the world,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Have mercy on us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: God the Holy Spirit,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Have mercy on us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Holy Trinity, one God
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Have mercy on us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Holy Mary.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Holy Mother of God,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response:Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Holy Virgin of virgins,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mother of Christ.
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mother of the Church
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mother of divine grace,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mother most pure,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mother most chaste
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mother Inviolate
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mother Undefiled,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mother most lovable,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mother most admirable
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mother of good counsel
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mother of our Creator,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mother of our Saviour,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Virgin most prudent
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Virgin most venerable
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Virgin most renowed,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Virgin most powerful,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Virgin most merciful
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Virgin most faithful
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mirror of justice,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Seat of wisdom,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Cause of our joy
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Spiritual Vessel
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Vessel of Honour,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Singular Vessel of devotion,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Mystical rose
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Tower of David,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Tower of ivory,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: House of gold,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Ark of the Covenant,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Gate of Heaven,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Morning star,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Health of the sick,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Refuge of sinners,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Comforter of the afflicted,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Help of Christians,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Queen of angels,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Queen of patriarchs,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Queen of prophets,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Queen of apostles,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Queen of martyrs,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Queen of confessors,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Queen of virgins,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Queen of all saints,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Queen conceived without Original Sin,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Queen assumed into Heaven,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>

                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Queen of the most holy Rosary,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Queen of peace,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Pray for us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Lamb of God, who takes away the sins of the world,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Spare us, O Lord.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Lamb of God, who takes away the sins of the world,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Graciously hear us, O Lord.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Lamb of God, who takes away the sins of the world,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: Have mercy on us.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: Pray for us, O Holy Mother of God,
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response: That we may be made worthy of the promises of Christ.
                    </Text>
                    <Text style={[styles.boxBodyText, {color: isDark ? '#fff' : 'black'}]}>
                    Say: LET US PRAY
                    </Text>
                    <Text style={[styles.boxBodyTextRespond, {color: isDark ? '#fff' : 'black'}]}>
                    Response(ALL): Grant, we beseech Thee, O Lord God, that we Thy Servants may enjoy perpetual health of mind and body and by the glorious intercession of the Blessed Mary, ever Virgin, be delivered from present sorrow and enjoy eternal happiness. Through Christ Our Lord. Amen.
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

export default GloriousScreen;