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

const Tab = createMaterialTopTabNavigator();

const TrendingTopic = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="DISCUSSIONS" component={Discussions} />
      <Tab.Screen name="PROBLEMS" component={Problem} />
    </Tab.Navigator>
  );
};

export default TrendingTopic;
