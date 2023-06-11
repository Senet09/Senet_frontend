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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

const Feed = ({navigation, themedStyle}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: props => (
        <Text
          {...props}
          style={{
            color: 'white',
            fontSize: 20,
            fontFamily: 'layfairDisplay-SemiBold',
            fontWeight: 'bold',
          }}>
          SENET
        </Text>
      ),
      headerStyle: {
        backgroundColor: '#1A5DB4', //Set Header color
      },
      headerRight: () => (
        <Ionicons
          name="chatbox-outline"
          size={30}
          color="white"
          style={{marginRight: 10}}
          onPress={() => navigation.navigate('MessagesScreen')}
        />
      ),
    });
  }, [navigation]);

  const [active, setActive] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    if (DATA.buttonActive === 'active') {
      setActive(active);
    } else if (DATA.buttonActive === '!active') {
      setActive(!active);
    }
  });
  const renderItem = ({item, index}) => {
    const handleClick = () => {
      if (item.buttonActive == 'active') {
        setActive(!active);
      } else if (item.buttonActive == '!active') {
        setActive(active);
      }
    };
    return (
      <View style={styles.card}>
        <View style={styles.verticleView}>
          <TouchableOpacity
          //onPress={() => navigation.navigate('Profile')}
          >
            <Avatar.Image
              source={{uri: item.avatarURI}}
              size={24}
              style={styles.cardAvatar}
            />
          </TouchableOpacity>

          <Text style={styles.cardTitle1}>{item.name}</Text>
        </View>
        <Image source={{uri: item.imageURI}} style={styles.cardImage} />

        <View style={styles.verticleView}>
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#5a6373' : 'black',
              },
              styles.buttonStyle,
            ]}
            onPress={handleClick}></Pressable>

          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#5a6373' : 'black',
              },
              styles.buttonStylelight,
              {
                backgroundColor: active ? '#FF5E3B' : '#871D07',
              },
            ]}
            //onPress={con}
          ></Pressable>
          <View style={{marginRight: 100}}>
            <MaterialCommunityIcons
              name="account-tie-voice"
              size={30}
              //onPress={() => navigation.navigate('MessagesScreen')}
              color="black"
              marginRight={100}
              style={{marginRight: 10}}
            />
          </View>
          <View>
            <Ionicons
              name="share-social-outline"
              marginRight={100}
              color={'#000000'}
              size={30}
            />
          </View>
        </View>

        <View style={styles.cardHeader}>
          <Text category="s1" style={styles.cardTitle}>
            {item.postTitle}
          </Text>
        </View>
        <View style={styles.cardContent}>
          <Text>{item.randomText}</Text>
        </View>
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
  },
  cardImage: {
    width: '100%',
    height: 300,
  },
  buttonStyle: {
    justifyContent: 'center',
    backgroundColor: '#1A5DB4',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#1A5DB4',
    height: 10,
    width: 20,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginLeft: 10,
    marginRight: 20,
    marginTop: 10,
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
  buttonStylelight: {
    justifyContent: 'center',

    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#1A5DB4',
    height: 10,
    width: 25,
    alignItems: 'center',
    borderRadius: 70,
    paddingVertical: 12,
    //paddingHorizontal: 32,
    marginLeft: 5,
    marginRight: 35,
    marginTop: 10,
    marginBottom: 20,
  },
  verticleView: {
    flexDirection: 'row',
    width: '100%',
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

export default Feed;
