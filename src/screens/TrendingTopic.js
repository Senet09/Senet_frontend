import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CommunityList from '../components/CommunityList';
import PostUpload from '../components/PostUpload';
import Problem from '../components/Problem';
import Discussions from '../components/Discussions';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TrendingTopic = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerTitle: (props) => (
        <Text
          {...props}
          style={{
            color: 'black',
            fontSize: 20,
            fontFamily: 'PlayfairDisplay-SemiBold',
            fontWeight: 'bold',
          }}>
          Trending
        </Text>
      ),
      headerStyle: {
        backgroundColor: '#ffffff', //Set Header color
      },
      headerLeft: () => (
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color="black"
          style={{ marginLeft: 10 }}
          onPress={() => navigation.navigate('Feed')}
        />
      ),
    });
  }, [navigation]);


  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="DISCUSSIONS"
      options={{
        tabBarLabel: 'DISCUSSIONS',
        tabBarLabelStyle: styles.tabLabel,
      }}
      component={Discussions} />
      <Tab.Screen
       name="PROBLEMS" 
       options={{
        tabBarLabel: 'PROBLEMS',
        tabBarLabelStyle: styles.tabLabel,
      }}
       component={Problem} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TrendingTopic;
