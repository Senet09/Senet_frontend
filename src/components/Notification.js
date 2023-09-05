import React from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: 1,
    name: 'John Doe',
    postTitle: 'President',
    imageURI: 'https://images.wsj.net/im-587905/?width=860&size=1.5',
    randomText: 'I have uploaded my first post',
    buttonActive: '!active',
    reactions: 123,
    TrendingRank: 1,
  },
  {
    id: 2,
    name: 'Jeus Troy',
    postTitle: 'Prime Minister',
    imageURI: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400/https://www.eastasiaforum.org/wp-content/uploads/2022/08/2022-06-09T104359Z_646144941_MT1SIPA000FI29QE_RTRMADP_3_SIPA-USA-400x241.jpg',
    randomText: 'This is the second post',
    buttonActive: 'active',
    reactions: 456,
    TrendingRank: 2,
  },
];

const Notification = ({ navigation, themedStyle }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.verticleView1}>
          <View style={styles.avatarContainer}>
         <Image

         source={{uri:item.imageURI}}
         style={styles.avatar}
         />
         </View>
         
        
          <View style={styles.verticleView}>
          <Text style={styles.randomText}>{item.randomText}</Text>
         
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    margin:5,
    flexWrap:'wrap'

  },
  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: 25,
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,

    alignItems:'flex-start',
    flexWrap: 'wrap'
  },
  verticleView: {
    flexDirection: 'column',
    alignItems: 'center',

  },
  verticleView1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  randomText: {
    
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  reactionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    alignSelf:'flex-start'
  },
  reactionsCount: {
    marginLeft: 4,
    fontSize: 12,
    color: '#888',
  },
  reactionsText: {
    marginLeft: 8,
    fontSize: 12,
    color: '#000',
    fontFamily:"Poppins-Regular"
  },
  rankText:{
    fontSize: 14,
    color: '#000',
    fontFamily:"Poppins-Regular",
    alignSelf:'flex-start'
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 24,
    marginRight:5
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default Notification;
