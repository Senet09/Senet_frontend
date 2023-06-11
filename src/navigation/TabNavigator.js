import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Button} from 'react-native';
const Tab = createBottomTabNavigator();
import PostUpload from '../components/PostUpload';
import PostUploadText from '../components/PostUploadText';
import Feed from '../screens/FeedScreen';
import CommunityList from '../components/CommunityList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';
import StackNavigator from './StackNavigator';
import DrawerNavigator from './DrawerNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import Notification from '../components/Notification';
import TrendingTopic from '../screens/TrendingTopic';
//import ProfileSc from '../components/ProfileSc';
//import ProfilePicUpdate from './src/components/ProfilePicUpdate';
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
      <Tab.Screen name="Feed" component={Feed} />
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
