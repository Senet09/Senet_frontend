import React, {useEffect, useState} from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import BeforeLogin from './src/navigation/BeforeLogin';
import {Text, View, StyleSheet, BackHandler, Alert} from 'react-native';
//import TabNavigator from './TabNavigator';
//import DrawerNavigator from './DrawerNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  // const backAction = () => {
  //   Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => null,
  //       style: 'cancel',
  //     },
  //     {text: 'YES', onPress: () => BackHandler.exitApp()},
  //   ]);
  //   return true;
  // };

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', backAction);

  //   return () =>
  //     BackHandler.removeEventListener('hardwareBackPress', backAction);
  // }, []);
  // const [islogged, setislogged] = useState(false);
  // const retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('islogged');
  //     if (value !== null) {
  //       // We have data!!
  //       console.log(value);
  //       setislogged(value);
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // };
  // useEffect(() => {
  //   retrieveData();
  // }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
