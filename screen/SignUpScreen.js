import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    ImageBackground,
    Image,
    Alert,
    ToastAndroid
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../components/context';
import { useTheme } from '@react-navigation/native';
import {useSelector} from 'react-redux';
import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({
  name: 'saint_rita.db', 
  createFromLocation: '~saint_rita.db'
}
  );
const SignInScreen = ({navigation}) => {
    const backgroudimage = '../assets/saint_rita1.jpg';
    const {isDark} = useSelector(state => state.userReducer);
    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const { signUp } = React.useContext(AuthContext);

    const { colors } = useTheme();

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });

    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

  function completeSignUp(username) {
    db.transaction ((tx) => { 
        tx.executeSql("SELECT * FROM tbl_users WHERE username = ? ", [username],
    (tx, result) => {
     let lenrow = result.rows.length;
     if(lenrow > 1) {
        ToastAndroid.show("User already exist", ToastAndroid.LONG);
     } else {

        let regUser = [];
         for(let i =0; i<lenrow; i++){
         let items = result.rows.item(i);
         regUser.push({id: items.id, username: items.username, user_img: items.user_img});
         }
         //dispatch(setUserID(items.id,items.username,items.user_img));
         signUp(regUser);
     }
    })
    })
    }

    const handleSignUpPress = (username,password,comfirm_password) => {
    
            try {

                if ( username.length == 0 || password.length == 0 ) {
                    Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                        {text: 'Okay'}
                    ]);
                    return;
                } 

            if(password == comfirm_password) {
                
                db.transaction((tx) => {
                    tx.executeSql(
                        "INSERT INTO tbl_users (username,password,user_img) VALUES (?,?,?) ",
                        [username,password,''],
                        (tx, res) => {
                            let len = res.rowsAffected;
                            if (len > 0) {
                                //console.log(len);
                              completeSignUp(username);
                            } else {
                                ToastAndroid.show("Error: ", ToastAndroid.LONG);
                            }
                        }
                    )
                })
              } else {
                ToastAndroid.show("Password do not match", ToastAndroid.LONG);
              }
            } catch (error) {
                console.log(error);
            }

    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor={isDark ? '#333333' : 'lightblue'} barStyle="light-content"/>
          <ImageBackground source={require(backgroudimage)} resizeMode="cover" style={styles.image}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {backgroundColor: isDark ? '#333333' : '#fff'}]}
        >
            <ScrollView>
            <Text style={[styles.text_footer, {color: isDark ? '#fff' : '#009387'}]}>Username</Text>
            <View style={styles.action}>
            <Image 
                    source={require('../assets/user.png')}
                    color={ isDark ? '#fff' : colors.text}
                    style={{width: 20, height: 20}}
                />
                <TextInput 
                    placeholder="Your Username"
                    style={[styles.textInput, {color: isDark ? '#fff' : colors.text}]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                     <Image 
                    source={require('../assets/check.png')}
                    color={ isDark ? '#fff' : colors.text}
                    style={{width: 20, height: 20}}
                />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35,
                color: isDark ? '#fff' : '#009387'
            }]}>Password</Text>
            <View style={styles.action}>
            <Image 
                    source={require('../assets/padlock.png')}
                    color={ isDark ? '#fff' : colors.text}
                    style={{width: 20, height: 20}}
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput,  {color: isDark ? '#fff' : colors.text}]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                   <Image 
                   source={require('../assets/close-eyes.png')}
                   color={ isDark ? '#fff' : colors.text}
                   style={{width: 20, height: 20}}
               />
                  :
                  <Image 
                   source={require('../assets/eye.png')}
                   color={ isDark ? '#fff' : colors.text}
                   style={{width: 20, height: 20}}
               />
                    }
                </TouchableOpacity>
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35,
                color: isDark ? '#fff' : '#009387'
            }]}>Confirm Password</Text>
            <View style={styles.action}>
            <Image 
                    source={require('../assets/padlock.png')}
                    color={ isDark ? '#fff' : colors.text}
                    style={{width: 20, height: 20}}
                />
                <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={[styles.textInput,  {color: isDark ? '#fff' : colors.text}]}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.confirm_secureTextEntry ? 
                     <Image 
                     source={require('../assets/close-eyes.png')}
                     color={ isDark ? '#fff' : colors.text}
                     style={{width: 20, height: 20}}
                 />
                    :
                    <Image 
                     source={require('../assets/eye.png')}
                     color={ isDark ? '#fff' : colors.text}
                     style={{width: 20, height: 20}}
                 />
                    }
                </TouchableOpacity>
            </View>
            {/* <View style={styles.textPrivate}>
                <Text style={[styles.color_textPrivate,  {color: isDark ? '#fff' : colors.text}]}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View> */}
            <View style={styles.button}>
                <TouchableOpacity
                     style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                     }]}
                    onPress={() => {handleSignUpPress(data.username,data.password,data.confirm_password)}}
                >
               
                    <Text style={[styles.textSign, {
                        color: isDark ? '#fff' : '#009387'
                    }]}>Sign Up</Text>
               
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: isDark ? '#fff' : '#009387'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
        </ImageBackground>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },

    image: {
        flex: 1,
        justifyContent: "center",
        opacity: .6
      },

    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
