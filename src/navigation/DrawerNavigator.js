import React from 'react';
import 'react-native-gesture-handler';
import {Button} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Image} from 'react-native';
const Drawer = createDrawerNavigator();
import PostUpload from '../components/PostUpload';
import PostUploadText from '../components/PostUploadText';
import Feed from '../screens/FeedScreen';
import CommunityList from '../components/CommunityList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';

import TabNavigator from './TabNavigator';
import CustomDrawer from '../components/CustomDrawer';
//import MessagesScreen from './src/components/MessageScreen';
//import { Drawer } from 'react-native-paper';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator
      // screenOptions={({route}) => ({
      //   headerShown: false,
      //   tabBarShowLabel: false,
      //   tabBarIcon: ({focused, color, size, iconName}) => {
      //     if (route.name === 'PostUploadText') {
      //       iconName = focused ? 'search-circle' : 'search-circle-outline';
      //     } else if (route.name === 'PostUpload') {
      //       iconName = focused ? 'flash-sharp' : 'flash-outline';
      //     } else if (route.name === 'Feed') {
      //       iconName = focused ? 'home' : 'home-outline';
      //     } else if (route.name === 'ProfileScreen') {
      //       iconName = focused ? 'people' : 'people-outline';
      //     }
      //     // You can return any component that you like here!
      //     return (
      //       <Ionicons
      //         name={iconName}
      //         size={30}
      //         color={'#00000'}
      //         source={require('senet/assets/attachments.png')}
      //       />
      //     );
      //   },
      //   tabBarActiveTintColor: 'tomato',
      //   tabBarInactiveTintColor: 'gray',
      // })}
      screenOptions={{headerShown: false}}
      useLegacyImplementation
      drawerContent={props => <CustomDrawer {...props} />}
      //inintialRouteName="Home"
      firstRoute="Home">
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: '',
        }}
        // options={{
        //   headerLeft: () => (
        //     <Button
        //       onPress={() => navigation.navigate('PostUploadText')}
        //       title="Info"
        //       color="#fff"
        //     />
        //   ),

        //   headerRight: () => (
        //     <Ionicons
        //       name="chatbubbles-outline"
        //       iconStyle={{margin: 100}}
        //       size={30}
        //       color={'#00000'}
        //       onPress={() => navigation.navigate('MessagesScreen')}
        //     />
        //   ),
        // }}

        component={TabNavigator}
      />

      <Drawer.Screen
        name="Community"
        options={{
          drawerLabel: 'Community',
        }}
        component={CommunityList}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
