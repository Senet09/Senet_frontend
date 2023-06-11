import React, {Component, useState, useEffect} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';
import {Avatar} from 'react-native-paper';

const DATA = [
  {
    id: 1,
    name: 'John Doe',
    postTitle: 'President',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI: 'https://images.wsj.net/im-587905/?width=860&size=1.5',
    randomText: 'I have uploaded my first content on senet ',
    buttonActive: '!active',
  },
  {
    id: 2,
    name: 'Jeus Troy',
    postTitle: 'Prime Minister',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400/https://www.eastasiaforum.org/wp-content/uploads/2022/08/2022-06-09T104359Z_646144941_MT1SIPA000FI29QE_RTRMADP_3_SIPA-USA-400x241.jpg',
    randomText: 'This is the second post',
    buttonActive: 'active',
  },
];

const Notification = ({navigation, themedStyle}) => {
  const [active, setActive] = useState(false);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.verticleView}
          //onPress={() => navigation.navigate('Profile')}
        >
          <Avatar.Image
            source={{uri: item.avatarURI}}
            size={24}
            style={styles.cardAvatar}
          />
          <Text style={{marginTop: 20, color: 'black'}}>{item.randomText}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={DATA.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 25,
    flexDirection: 'row',
  },
  cardImage: {
    width: '100%',
    height: 300,
  },

  verticleView: {
    flexWrap: 'wrap',

    flexDirection: 'row',
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: '#444',
  },
  cardTitle1: {
    color: '#444',
    fontSize: 15,
    marginTop: 15,
  },
  cardAvatar: {
    margin: 16,
  },
  cardContent: {
    padding: 10,
    borderWidth: 0.25,
    borderColor: '#eee',
  },
});

export default Notification;
