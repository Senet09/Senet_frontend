import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
//import "@fontsource/playfair-display";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BASE_URL from 'senet/src/constants/utils.js';
import Loader from '../components/Loader';

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = {username: userName, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch(`https://b45d-203-110-242-43.in.ngrok.io/users/authenticate`, {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.username == userName) {
          AsyncStorage.setItem('user_id', responseJson.username);
          console.log(responseJson.username);
          navigation.replace('DrawerNavigator');
        } else {
          setErrortext(responseJson.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{
        
                justifyContent: 'center',
                alignItems: 'flex-start',
      marginLeft: 35,
            
          }}>
             <Text style={styles.logintext}>
              Login
             </Text>
            </View>
            <View style={styles.SectionStyle}>
             
            
              <TextInput
                style={styles.inputStyle}
                onChangeText={userName => setUserName(userName)}
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#000000"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>  
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
        <View style={styles.SectionStyle}> 
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Enter Password" //12345
                placeholderTextColor="#000000"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
         </View> 
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            {/* <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}></Text>
            </TouchableOpacity> */}

            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#5a6373' : 'black',
                },
                styles.buttonStyle,
              ]}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </Pressable>

            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  logintext: {
    fontFamily: 'Gilroy',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 40,
    color: '#312E49',
    
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignContent: 'center',
  },
  SectionStyle: {
   flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,

  },
  buttonStyle: {
    justifyContent: 'center',
    backgroundColor: '#1A5DB4',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#1A5DB4',
    height: 60,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    fontFamily: 'PlayfairDisplay-SemiBold',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    height: 60,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
    backgroundColor: '#D9D9D9',
  },
  registerTextStyle: {
    color: '#00000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});

// widht: 50,
// height: 50,
// borderRadius: 10,
// alignItems: 'center',
// justifyContent: 'center',
// paddingVertical: 12,
// paddingHorizontal: 32,
// borderRadius: 4,
// elevation: 3,
// backgroundColor: 'black',
