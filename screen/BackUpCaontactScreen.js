import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { useTheme } from '@react-navigation/native';
import CardView from 'react-native-cardview';
import Contacts from 'react-native-contacts';
import {useSelector} from 'react-redux';
const BackUpContactScreen = ({navigation}) => {
    const { colors } = useTheme();
    const [data, setData] = useState([]);
    const {isDark} = useSelector(state => state.userReducer);

    useEffect(()=>{
        getAllContact();
    },[])

    function searchContact(){

    }

    async function getAllContact(){
        let AllContact = await Contacts.getAll();
        let contacts = [];
        AllContact.forEach((items)=>{
            contacts.push({displayName: items.displayName, hasThumbnail: items.hasThumbnail, thumbnailPath: AllContact.thumbnailPath, phoneNumbers: items.phoneNumbers[0]})
        })
        setData(contacts);
        //console.log(AllContact);
    }

    return (
        <View style={[styles.main_container, {backgroundColor: isDark ? '#333333' : '#fff'}]}>
        <StatusBar backgroundColor={isDark ? '#333333' : 'lightblue'} barStyle="light-content"/>
        <View  style={[styles.header, {backgroundColor: isDark ? '#333333' : 'lightblue' }]}>
            <View style={styles.headerBtn}>
            <TouchableOpacity  onPress={() =>navigation.navigate('HomeScreen')}>
                  <Image style={{width: 40, height: 40}} source={require('../assets/back.png')} size={50} />
              </TouchableOpacity>
            </View>
            <View style={styles.headerInput}>
            <View style={styles.icon}>
            <Image style={{width: 30, height: 30}} source={require('../assets/search.png')} size={50} />
            </View>
              <View style={styles.input}>
              <TextInput onChangeText={(search) => searchContact(search)} placeholder='Search Your Contact' />
              </View>
            </View>
        </View>
        <View style={styles.container_view}>
        <ScrollView>
        {
            data.map((items,index)=>(
                <CardView key={index} style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
                cardElevation={55}
                cardMaxElevation={5}
                cornerRadius={15}
                >
                <View style={styles.boxBody}>
                    <View>
                        <Image source={ (items.hasThumbnail) ? 
                            {uri : items.thumbnailPath} :
                            require("../assets/contact.png")
                            } style={{width: 50, height: 50, borderRadius: 200}} />
                    </View>
                    <View>
                       <Text style={[styles.text, {color: isDark ? '#fff' : 'black'}]}>{items.displayName}</Text>
                       
                    </View>
                </View>
            </CardView>
            ))
        }
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
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
  
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: "center"
      },
  
  
      header: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'row',
      },
      headerBtn: {
        height: 40,
        width: 50,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
  
      headerInput: {
        height: 40,
        width: '80%',
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
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

export default BackUpContactScreen;