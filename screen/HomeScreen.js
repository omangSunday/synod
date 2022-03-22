import React, {useEffect, useState, useContext, useRef} from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView, TouchableOpacity, TextInput, LogBox, Modal } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { AuthContext } from '../components/context';
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar, TouchableRipple, Switch} from 'react-native-paper';
import CardView from 'react-native-cardview';
import Contacts from 'react-native-contacts';
import RBSheet from "react-native-raw-bottom-sheet";
import {useSelector, useDispatch} from 'react-redux';
import { setIsDark,setUserID } from './redux/action';

const HomeScreen = ({navigation}) => {
  const { colors } = useTheme();
  const refRBSheet = useRef();
  const [data, setData] = useState([]);
  const {userName, userImg, isDark} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
    getUserData();
    getAllContact();

    return ()=> getUserData();
  }, []);

  async function getAllContact(){
    let AllContact = await Contacts.getAll();
    let contacts = [];
    AllContact.forEach((items)=>{
        contacts.push({displayName: items.displayName, hasThumbnail: items.hasThumbnail, thumbnailPath: AllContact.thumbnailPath, phoneNumbers: items.phoneNumbers})
    })
    setData(contacts);
    //console.log(AllContact);
}

  async function getUserData() {
    let userToken = await AsyncStorage.getItem('userToken');
    let userName = await AsyncStorage.getItem('userName');
    let userImg = await AsyncStorage.getItem('userImg');

    dispatch(setUserID(userToken,userName,userImg));
  }
   // Ignore log notification by message:
   const { signOut } = useContext(AuthContext);
   // Ignore all log notifications:
     LogBox.ignoreAllLogs();

    return (
      <View style={[styles.main_container, {backgroundColor: isDark ? '#333333' : '#fff'}]}>
        <StatusBar backgroundColor={isDark ? '#333333' : 'lightblue'} barStyle="light-content"/>
        
        <View style={[styles.header, {backgroundColor: isDark ? '#333333' : 'lightblue'}]}>
                <View style={styles.view_one}>
               <View>
               <Avatar.Image
                    source={
                        userImg == null
                        ? require('../assets/photo.jpg')
                        : { uri: userImg }
                          }
                            size={30}
                            />
               </View>
                
                <View>
                <Text style={styles.text_one}>{userName}</Text>
                </View>

                <View>
                <TouchableRipple onPress={() => {dispatch((isDark) ? setIsDark(false) : setIsDark(true))}}>
                            <View >
                                <View pointerEvents="none">
                                    <Switch value={isDark ? true : false} />
                                </View>
                            </View>
                        </TouchableRipple>
                </View>
                </View>
          </View>
        
    <Animatable.View animation="fadeInUpBig" style={[styles.scroll, {backgroundColor: isDark ? '#333333' : '#fff'}]}
       >
 
      <View style={styles.container_view}>
        <ScrollView>
          <View style={styles.container_box}>
          
            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={25}
             >
                <View style={styles.inner}>
                <TouchableOpacity onPress={()=>navigation.navigate('QuestionScreen', {
                  Title: "Synod Questionnaire"
                })}>
                    <View style={styles.icon_style}>
                    <Text style={styles.text_o} > Synod Questionnaire </Text>
                    <Image 
                    style={{width: 40, height: 40}} source={require('../assets/eye.png')}
                    size={50}
                    />
                    </View>
                    <Text style={styles.text_o}></Text>
                    </TouchableOpacity>
                </View>
            </CardView>
            

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={25}
             >
                <View style={styles.inner}>
                <TouchableOpacity onPress={()=>navigation.navigate('DailyPrayerScreen', {Title: 'The Daily Prayers'})} >
                <View style={styles.icon_style}>
                <Text style={styles.text_o} >  Daily Prayers </Text>
                    <Image 
                    style={{width: 40, height: 40}} source={require('../assets/jesus.png')}
                    size={50}
                    />
                    </View>
            
                    </TouchableOpacity>
                </View>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={25}
             >
                <View style={styles.inner}>
                <TouchableOpacity onPress={()=>navigation.navigate('CatholicQuizzesScreen', {Title: 'Catholic Quizzes Questions'})} >
                <View style={styles.icon_style}>
                <Text style={styles.text_o} >  Catholic Quizzes </Text>
                    <Image 
                    style={{width: 40, height: 40, borderRadius: 50}} source={require('../assets/pope.png')}
                    size={50}
                    />
                    </View>
            
                    </TouchableOpacity>
                </View>
            </CardView>

            <CardView style={[styles.box, {backgroundColor: isDark ? '#333333' : '#fff'}]}
              cardElevation={55}
              cardMaxElevation={5}
              cornerRadius={25}
             >
                <View style={styles.inner}>
                <TouchableOpacity onPress={()=>refRBSheet.current.open()} >
                <View style={styles.icon_style}>
                <Text style={styles.text_o} >  BackUp My Contact </Text>
                    <Image 
                    style={{width: 40, height: 40, borderRadius: 50}} source={require('../assets/contact.png')}
                    size={50}
                    />
                    </View>
            
                    </TouchableOpacity>
                </View>
            </CardView>

            </View>
            </ScrollView>
        </View>

        <View style={[styles.containerFooter, {backgroundColor: isDark ? '#333333' : '#fff'}]}>
            <View style={styles.containerFooterInner}>
            <View>
                    <TouchableOpacity style={styles.presser}  onPress={()=>{
                  signOut()
                  dispatch(setUserID(null,null,null))
                  }}>
                    <Image 
                    style={{width: 40, height: 40}} source={require('../assets/log-out.png')}
                    size={50}
                    />
                    </TouchableOpacity>
                    </View>
                    
                    <View>
                    <TouchableOpacity style={styles.presser}>
                    <Image 
                    style={{width: 40, height: 40}} source={require('../assets/user.png')}
                    size={50}
                    />
                    </TouchableOpacity>
                    </View>

                    <View>
                    <TouchableOpacity style={styles.presser}>
                    <Image 
                    style={{width: 40, height: 40}} source={require('../assets/share.png')}
                    size={50}
                    />
                    </TouchableOpacity>
                    </View>

                    <View>
                    <TouchableOpacity style={styles.presser}>
                    <Image 
                    style={{width: 40, height: 40, borderRadius: 50}} source={require('../assets/jesus_img.jpg')}
                    size={50}
                    />
                    </TouchableOpacity>
                    </View>

                    <View>
                    <TouchableOpacity style={styles.presser}>
                    <Image 
                    style={{width: 40, height: 40, borderRadius: 50}} source={require('../assets/saint_rita.png')}
                    size={50}
                    />
                    </TouchableOpacity>
                    </View>

                    <View>
                    <TouchableOpacity style={styles.presser}>
                    <Image 
                    style={{width: 40, height: 40, borderRadius: 50}} source={require('../assets/pope.png')}
                    size={50}
                    />
                    </TouchableOpacity>
                    </View>
            </View>
        </View>

        </Animatable.View>

        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            height={450}
            animationType="slide"
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
              },
              draggableIcon: {
                backgroundColor: "#000"
              },
              container: {
                borderTopRightRadius: 10, 
                borderTopLeftRadius: 10,
                
              }  
            }}
          >

      <View  style={styles.headerContact}>
            <View style={[styles.headerInput, {backgroundColor: isDark ? '#333333' : '#fff'}]}>
            <View style={styles.icon}>
            <Image style={{width: 30, height: 30}} source={require('../assets/search.png')} size={50} />
            </View>
              <View style={styles.input}>
              <TextInput onChangeText={(search) => searchContact(search)} style={{color: isDark ? '#fff' : '#333333'}} placeholder='Search Your Contact'  />
              </View>
            </View>

            <View style={[styles.headerSave, {backgroundColor: isDark ? '#333333' : '#fff'}]}>
            <View style={styles.iconn}>
            <TouchableOpacity>
            <Image style={{width: 30, height: 30}} source={require('../assets/save-file.png')} size={50} />
            </TouchableOpacity>
            </View>
            <View style={styles.iconn}>
            <TouchableOpacity>
            <Image style={{width: 30, height: 30}} source={require('../assets/paste.png')} size={50} />
            </TouchableOpacity>
            </View>
            </View>
            
        </View>

        <View>
        <ScrollView>
        {
            data.map((items,index)=>(
                <CardView key={index} style={[styles.boxContact, {backgroundColor: isDark ? '#333333' : '#fff'}]}
                cardElevation={55}
                cardMaxElevation={5}
                cornerRadius={15}
                >
                <View style={styles.boxBodyContact}>
                    <View style={{width: "20%"}}>
                        <Image source={ (items.hasThumbnail) ? 
                            {uri : items.thumbnailPath} :
                            require("../assets/contact.png")
                            } style={{width: 50, height: 50, borderRadius: 200}} />
                    </View>
                    <View style={{width: "70%"}}>
                       <Text style={[styles.text, {color: isDark ? '#fff' : 'black'}]}>{items.displayName}</Text>
                       
                         {
                         items.phoneNumbers.map((phone,index)=>(
                          <Text key={index} style={[styles.text, {color: isDark ? '#fff' : 'black'}]}>{phone.number}</Text>
                         ))
                         }
                         
                    </View>
                </View>
            </CardView>
            ))
        }
        </ScrollView>
        </View>
            
          </RBSheet>

      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },

  container_view: {
    margin: 5,
    height: '85%',
  },

  containerFooter: {
    marginStart: 5,
    marginEnd: 5,
    height: '10%',
  },

  containerFooterInner: {
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  container_box: {
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  box: {
    width: '46%',
      height: 140,
      margin: 5
  },

  inner: {
    padding: 5,
    flex: 1,
    justifyContent: 'center'
  },

  body_style: {
    height: '100%'
  },

  body_inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },

  text_o:{
      color: 'lightblue',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold'
  },

  text_L:{
    color: 'red',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
},

  icon_style: {
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
     
  },

  preference: {
    flex: 1,
    justifyContent: 'center',
    margin: 5
  },

  header: {
    backgroundColor: '#0056E0'
    
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

text: {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: "center"
  },

boxContact: {
  margin: 5
},

boxBodyContact: {
  flex: 1,
  margin: 10,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center'
},

headerContact: {
  paddingVertical: 5,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 5,
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
  width: '60%',
  margin: 5,
  backgroundColor: 'white',
  borderRadius: 10,
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
},

headerSave: {
  height: 40,
  width: '30%',
  margin: 5,
  backgroundColor: 'white',
  borderRadius: 10,
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
},

input: {
  width: '100%',

},

icon: {
  padding: 3
},

iconn: {
  padding: 3
},

});
