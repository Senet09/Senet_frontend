import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation

import {createStackNavigator} from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens
import SplashScreen from '../screens/SplashScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import RegisterScreen from '../screens/RegisterScreen.js';
import DrawerNavigatorRoutes from '../components/DrawerNavigationRoutes.js';
import HomeScreen from '../components/HomeScreen.js';
import FeedScreen from '../screens/FeedScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';
import CommunityList from '../components/CommunityList.js';
import PasswordChangeScreen from '../components/PasswordChange.js';
import Gpt3Page from '../components/GptScreen.js';
import PostUpload from '../components/PostUpload.js';
import PostUploadText from '../components/PostUploadText.js';
import TabNavigator from './TabNavigator.js';
import DrawerNavigator from './DrawerNavigator.js';
import ProfileInfoUpdate from '../components/ProfileInfoUpdate.js';
import ChatScreen from '../screens/ChatScreen.js';
import MessagesScreen from '../screens/MessageScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';
const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      {/* SplashScreen which will come once for 5 Seconds */}
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        // Hiding header for Splash Screen
        options={{headerShown: false}}
      />
      {/* Auth Navigator: Include Login and Signup */}
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      {/* Navigation Drawer as a landing page */}
      <Stack.Screen
        name="DrawerNavigationRoutes"
        component={DrawerNavigatorRoutes}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FeedScreen"
        component={FeedScreen}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CommunityList"
        component={CommunityList}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PasswordChangeScreen"
        component={PasswordChangeScreen}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Gpt3Page"
        component={Gpt3Page}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PostUpload"
        component={PostUpload}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PostUploadText"
        component={PostUploadText}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileInfoUpdate"
        component={ProfileInfoUpdate}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        // Hiding header for Navigation Drawer
        //options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
