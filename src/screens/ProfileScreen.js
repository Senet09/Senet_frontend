import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Feed from './FeedScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DATA = [
  {
    id: 1,
    name: 'John Doe',
    postTitle: 'President',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI: 'https://images.wsj.net/im-587905/?width=860&size=1.5',
    randomText: 'I have uploaded my first content on senet ',
  },
  {
    id: 2,
    name: 'John Doe',
    postTitle: 'President',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI: 'https://images.wsj.net/im-587905/?width=860&size=1.5',
    randomText: 'I have uploaded my first content on senet ',
  },
  {
    id: 3,
    name: 'Jeus Troy',
    postTitle: 'Prime Minister',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400/https://www.eastasiaforum.org/wp-content/uploads/2022/08/2022-06-09T104359Z_646144941_MT1SIPA000FI29QE_RTRMADP_3_SIPA-USA-400x241.jpg',
    randomText: 'This is the second post',
  },
];
const ProfileScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'John Doe',
      headerRight: props => (
        <Ionicons
          name="md-cog-outline"
          size={30}
          color="#fff"
          style={{marginLeft: 10}}
          onPress={() => navigation.navigate('SettingsScreen')}
        />
      ),
      headerStyle: {
        backgroundColor: '#1A5DB4', //Set Header color
      },
    });
  }, [navigation]);

  const renderItem = ({item, index}) => {
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
            ]} //onPress={handleSubmitPress}
          ></Pressable>

          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#5a6373' : 'black',
              },
              styles.buttonStylelight,
            ]} //onPress={handleSubmitPress}
          ></Pressable>
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
    <View style={{flex: 1}}>
      <View style={{flex: 0.5}}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 0.9}}>
        <FlatList
          style={styles.container}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={DATA.id}
        />
      </View>
    </View>
  );

  //     return(
  // <ScrollView>
  // <View style={styles.v}>

  // <Avatar.Image
  //                 source={{ uri: DATA.avatarURI }}
  //                 size={70}
  //                 style={styles.cardAvatar}
  //               />
  //                <Text style={styles.cardTitle1}>John Doe</Text>

  // </View>

  // <Feed/>

  // </ScrollView>
  //     )
};

const styles = StyleSheet.create({
  v: {
    flexDirection: 'row',
    //justifyContent:'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  cardAvatar: {
    margin: 16,
  },
  cardTitle1: {
    color: '#444',
    fontSize: 15,
    marginTop: 15,
  },
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
    backgroundColor: '#d41111',
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
  header: {
    backgroundColor: '#1A5DB4',
    height: 150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,

    position: 'absolute',
    marginTop: 50,
    marginLeft: 130,
  },
  name: {
    fontSize: 22,
    color: '#000000',

    fontWeight: '100',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,

    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});

export default ProfileScreen;
