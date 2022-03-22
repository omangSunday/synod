import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    ToastAndroid,
    ImageBackground,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { AuthContext } from '../components/context';
import {useSelector} from 'react-redux';
import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({
    name: 'saint_rita.db', 
    createFromLocation: '~saint_rita.db'
});
const SignInScreen = ({navigation}) => {
    const backgroudimage = '../assets/saint_rita1.jpg';
    const {isDark} = useSelector(state => state.userReducer);
    //const dispatch = useDispatch();

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);
 
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, Password) => {
    try {

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        } 
        
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM tbl_users WHERE username = ? AND password = ? ",
                [userName, Password],
                (tx, res) => {
                    let len = res.rows.length;
                    // let AgentDetail = res.rows.item(0);
                    if (len > 0) {
                        let foundUser = [];
                        for(let i =0; i<len; i++){
                        let items = res.rows.item(i);
                        foundUser.push({id: items.id,  username: items.username,  user_img: items.user_img});
                        }
                        console.log(len);
                        //dispatch(setUserID(items.id,items.username,items.user_img));
                        //setFoundUser(AgentDetail);
                        //let password = res.rows.item(0).agent_pass;
                        signIn(foundUser);
                    } else {
                        ToastAndroid.show("User not found", ToastAndroid.LONG);
                    }
                }
            )
        })
    } catch (error) {
        console.log(error);
    }
}

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor={isDark ? '#333333' : 'lightblue'} barStyle="light-content"/>
          <ImageBackground source={require(backgroudimage)} resizeMode="cover" style={styles.image}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Hi Sign-In!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: isDark ? '#333333' : colors.background
            }]}
        >
            <Text style={[styles.text_footer, {
                color: isDark ? '#fff' : colors.text
            }]}>Username</Text>
            <View style={styles.action}>
                <Image 
                    source={require('../assets/user.png')}
                    color={ isDark ? '#fff' : colors.text}
                    style={{width: 20, height: 20}}
                />
                <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: isDark ? '#fff' : colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
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
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }
            

            <Text style={[styles.text_footer, {
                color: isDark ? '#fff' : colors.text,
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
            <Image 
                    source={require('../assets/padlock.png')}
                    color={ isDark ? '#fff' : colors.text}
                    style={{width: 20, height: 20}}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: isDark ? '#fff' : colors.text
                    }]}
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
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
            

            {/* <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity> */}
            <View style={styles.button}>
                <TouchableOpacity
                   style={[styles.signIn, {
                    borderColor: '#009387',
                    borderWidth: 1,
                    marginTop: 15
                }]}
                    onPress={() => {loginHandle( data.username, data.password )}}
                >
                
                    <Text style={[styles.textSign, {
                        color: isDark ? '#fff' : '#009387'
                    }]}>Sign In </Text>
               
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: isDark ? '#fff' : '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
        </ImageBackground>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'lightblue'
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
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        fontStyle: 'italic'
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
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
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
        borderRadius: 50
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
