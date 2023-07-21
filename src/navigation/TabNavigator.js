import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Button} from 'react-native';
const Tab = createBottomTabNavigator();
import PostUpload from '../components/PostUpload';
import PostUploadText from '../components/PostUploadText';
import Feed from '../screens/FeedScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../screens/SettingsScreen';
import Notification from '../components/Notification';
import TrendingTopic from '../screens/TrendingTopic';
import SplashScreen from '../screens/SplashScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import RegisterScreen from '../screens/RegisterScreen.js';
import HomeScreen from '../components/HomeScreen.js';
import FeedScreen from '../screens/FeedScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';
import PasswordChangeScreen from '../components/PasswordChange.js';
import Gpt3Page from '../components/GptScreen.js';
import ProfileInfoUpdate from '../components/ProfileInfoUpdate.js';
import ChatScreen from '../screens/ChatScreen.js';
import MessagesScreen from '../screens/MessageScreen.js';

//import ProfileSc from '../components/ProfileSc';
//import ProfilePicUpdate from './src/components/ProfilePicUpdate';

// const Auth = () => {
//   // Stack Navigator for Login and Sign up Screen
//   return (
//     <Stack.Navigator initialRouteName="LoginScreen">
//       <Stack.Screen
//         name="LoginScreen"
//         component={LoginScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="RegisterScreen"
//         component={RegisterScreen}
//         options={{
//           title: 'Register', //Set Header Title
//           headerStyle: {
//             backgroundColor: '#307ecc', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// };


const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // headerShown: false,
        tabBarShowLabel: false,
        //tabBarActiveBackgroundColor: '#307ecc',
        tabBarIcon: ({focused, color, size, iconName}) => {
          if (route.name === 'Trending') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'flash-sharp' : 'flash-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'ProfileScreen') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'ProfilePicUpdate') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'PostUploadText') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={30}
              color={'#307ecc'}
              //color={'#00000'}
              // source={require('senet/assets/attachments.png')}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarVisibilityAnimationConfig: {
          duration: 300,
          useNativeDriver: true,
        },
        animantionEnabled: true,
        sifting: true,
        swipeEnabled: true,
      })}>
      <Tab.Screen
        name="Feed"
        //options={{headerShown: false}}
        component={FeedScreen}
      />
      <Tab.Screen
        name="Trending"
        //options={{headerShown: false}}
        component={TrendingTopic}
      />
      
      <Tab.Screen
        name="PostUploadText"
        //options={{headerShown: false}}
        component={PostUploadText}
      />
      <Tab.Screen
        name="Notification"
        //options={{headerShown: false}}
        component={Notification}
      />
      {/* <Tab.Screen name="CommunityList" component={CommunityList} /> */}
      <Tab.Screen
        name="ProfileScreen"
        //options={{headerShown: false}}
        component={ProfileScreen}

      />
   
      {/* <Tab.Screen name="DraweNavigator" component={DrawerNavigator} /> */}
      {/* <Tab.Screen name="ProfilePicUpdate" component={ProfilePicUpdate} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
