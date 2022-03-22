import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image } from "react-native";
import { useTheme } from '@react-navigation/native';
import CardView from 'react-native-cardview';
import {useSelector} from 'react-redux';
const RosaryMistryScreen = ({route,navigation}) => {
    const {Title} = route.params;
    const { colors } = useTheme();
    const {isDark} = useSelector(state => state.userReducer);
    return (
        <View style={[styles.main_container, {backgroundColor: isDark ? '#333333' : '#fff'}]}>
        <StatusBar backgroundColor={isDark ? '#333333' : 'lightblue'} barStyle="light-content"/>
        <View  style={[styles.header, {backgroundColor: isDark ? '#333333' : 'lightblue' }]}>
            <View>
                <TouchableOpacity  onPress={() =>navigation.navigate('DailyPrayerScreen', {Title: 'Daily Prayers'})}>
                    <Image style={{width: 40, height: 30}} source={require('../assets/back.png')} />
                </TouchableOpacity>
            </View>

            <View style={{flex: 1}}>
                <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: isDark ? '#fff' : 'black'}}>{Title}</Text>
            </View>
        </View>
        <View style={styles.container_view}>
        <ScrollView>
        <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <TouchableOpacity onPress={()=>navigation.navigate('JoyfulScreen', {Title: "The joyful mysteries"})}>
                    <View style={styles.boxBody}>

                    <View>
                    <Image
                        source={require("../assets/joyfull.jpg")}
                        style={styles.image}
                        resizeMode="cover"
                        resizeMethod="auto"
                    />
                    </View>
                
                    <View style={styles.viewtext}>
                        <Text style={[styles.text, {color: isDark ? '#fff' : 'black'} ]}>
                            THE JOYFUL MYSTERIES
                        </Text>
                        <Text style={[styles.textday, {color: isDark ? '#fff' : 'black'} ]}>
                            Every Mondays and Saturdays
                        </Text>
                    </View>

                </View>
                </TouchableOpacity>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <TouchableOpacity onPress={()=>navigation.navigate("SorrowfulScreen", {Title: "The sorrowful mysteries"})}>
                    <View style={styles.boxBody}>

                    <View>
                    <Image
                        source={require("../assets/sorrowfull.jpg")}
                        style={styles.image}
                        resizeMode="cover"
                        resizeMethod="auto"
                    />
                    </View>
                
                    <View style={styles.viewtext}>
                        <Text style={[styles.text, {color: isDark ? '#fff' : 'black'} ]}>
                            THE SORROWFUL MYSTERIES
                        </Text>
                        <Text style={[styles.textday, {color: isDark ? '#fff' : 'black'} ]}>
                            Every Tuesdays and Fridays
                        </Text>
                    </View>

                </View>
                </TouchableOpacity>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <TouchableOpacity onPress={()=>navigation.navigate("GloriousScreen", {Title: "The Glorious mysteries"})}>
                    <View style={styles.boxBody}>

                    <View>
                    <Image
                        source={require("../assets/glorious.jpg")}
                        style={styles.image}
                        resizeMode="cover"
                        resizeMethod="auto"
                    />
                    </View>
                
                    <View style={styles.viewtext}>
                        <Text style={[styles.text, {color: isDark ? '#fff' : 'black'} ]}>
                            THE GLORIOUS MYSTERIES
                        </Text>
                        <Text style={[styles.textday, {color: isDark ? '#fff' : 'black'} ]}>
                            Every Wednesdays and Sundays
                        </Text>
                    </View>

                </View>
                </TouchableOpacity>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={15}
             >
                <TouchableOpacity onPress={()=>navigation.navigate("LuminousScreen", {Title: "The luminous mysteries"})}>
                    <View style={styles.boxBody}>

                    <View>
                    <Image
                        source={require("../assets/luminous.jpg")}
                        style={styles.image}
                        resizeMode="cover"
                        resizeMethod="auto"
                    />
                    </View>
                
                    <View style={styles.viewtext}>
                        <Text style={[styles.text, {color: isDark ? '#fff' : 'black'} ]}>
                            THE LUMINOUS MYSTERIES
                        </Text>
                        <Text style={[styles.textday, {color: isDark ? '#fff' : 'black'} ]}>
                            Every Thursdays
                        </Text>
                    </View>

                </View>
                </TouchableOpacity>
            </CardView>

        </ScrollView>
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
        
    },
  
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: "center"
      },

      textday: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: "center" 
      },
  
  
    header: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
      },

      image: {
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          width: '100%',
          height: 200
      },

  viewtext:{
      margin: 5,
  },

  });

export default RosaryMistryScreen;