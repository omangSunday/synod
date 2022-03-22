 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 
 import React from 'react';
 import { View, LogBox, PermissionsAndroid } from 'react-native';
 import RootStackScreen from './screen/RootStackScreen';
import PageStackScreen from './screen/PageStackScreen';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
 import {Provider} from 'react-redux';
 import LottieView from 'lottie-react-native';
 import { Store } from './screen/redux/store';
 const App = () => {
   // Ignore log notification by message:
   LogBox.ignoreLogs(['Warning: ...']);
 // Ignore all log notifications:
   LogBox.ignoreAllLogs();

   PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    {
      'title': 'Contacts',
      'message': 'This app would like to view your contacts.',
    }
  )
    .catch(err => console.log(err))

   const initialLoginState = {
    isLoading: true,
    isSyncing: false,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          userImg: action.img,
          isLoading: false,
        };

    }
  };

  

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      const userToken = String(foundUser[0].id);
      const userName = foundUser[0].username;
      const userImg = foundUser[0].user_img;
      try {
        await AsyncStorage.setItem('userToken', String(userToken));
        await AsyncStorage.setItem('userName', String(userName));
        await AsyncStorage.setItem('userImg', String(userImg));
        //console.log(userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userName');
        await AsyncStorage.removeItem('userImg');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },

    signUp: async(regUser) => {
        const userToken = String(regUser[0].id);
        const userName = regUser[0].username;
        const userImg = regUser[0].user_img;
        try {
          await AsyncStorage.setItem('userToken', String(userToken));
          await AsyncStorage.setItem('userName', String(userName));
          await AsyncStorage.setItem('userImg', String(userImg));
          //console.log(userToken);
        } catch(e) {
          console.log(e);
        }
        dispatch({ type: 'REGISTER', id: userName, token: userToken, img: userImg });
      },
  }), []);

   
React.useEffect(()=>{
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
        dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
      }, 2500);
}, []);

if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <LottieView source={require('./assets/62019-logo-animation.json')} autoPlay loop />
      </View>
    );
  }
 
   return (
    <AuthContext.Provider value={authContext}>
      <Provider store={Store}>
      <NavigationContainer >
      { loginState.userToken !== null ? 
        <PageStackScreen/>
        :
        <RootStackScreen/>
      }
    </NavigationContainer>
      </Provider>
    </AuthContext.Provider>
   );
 }
 
 export default App;
 