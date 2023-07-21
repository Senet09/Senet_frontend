// import React, {Component, useState, useEffect} from 'react';
// import {
//   Image,
//   View,
//   TouchableOpacity,
//   Text,
//   FlatList,
//   StyleSheet,
//   Button,
//   Pressable,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {Header} from 'react-native-elements';
// import {Avatar} from 'react-native-paper';

// const DATA = [
//   {
//     id: 1,
//     name: 'John Doe',
//     postTitle: 'President',
//     avatarURI:
//       'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
//     imageURI: 'https://images.wsj.net/im-587905/?width=860&size=1.5',
//     randomText: 'I have uploaded my first content on senet ',
//     buttonActive: '!active',
//   },
//   {
//     id: 2,
//     name: 'Jeus Troy',
//     postTitle: 'Prime Minister',
//     avatarURI:
//       'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
//     imageURI:
//       'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400/https://www.eastasiaforum.org/wp-content/uploads/2022/08/2022-06-09T104359Z_646144941_MT1SIPA000FI29QE_RTRMADP_3_SIPA-USA-400x241.jpg',
//     randomText: 'This is the second post',
//     buttonActive: 'active',
//   },
// ];

// const Discussions = ({navigation, themedStyle}) => {
//   const [active, setActive] = useState(false);

//   const renderItem = ({item, index}) => {
//     return (
//       <View style={styles.card}>
//          <Avatar.Image
//             source={{uri: item.avatarURI}}
//             size={24}
//             style={styles.cardAvatar}
//           />
//         <TouchableOpacity
//           style={styles.verticleView}
//           //onPress={() => navigation.navigate('Profile')}
//         >
         
//           <Text style={{marginTop: 20, color: 'black'}}>{item.randomText}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <FlatList
//       style={styles.container}
//       data={DATA}
//       renderItem={renderItem}
//       keyExtractor={DATA.id}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   card: {
//     backgroundColor: '#fff',
//     marginBottom: 25,
//     flexDirection: 'row',
//   },
//   cardImage: {
//     width: '100%',
//     height: 300,
//   },

//   verticleView: {
//     flexWrap: 'wrap',

//     flexDirection: 'row',
//   },
//   cardHeader: {
//     padding: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   cardTitle: {
//     color: '#444',
//   },
//   cardTitle1: {
//     color: '#444',
//     fontSize: 15,
//     marginTop: 15,
//   },
//   cardAvatar: {
//     margin: 16,
//   },
//   cardContent: {
//     padding: 10,
//     borderWidth: 0.25,
//     borderColor: '#eee',
//   },
// });

// export default Discussions;
import React from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: 1,
    name: 'John Doe',
    postTitle: 'President',
    imageURI: 'https://images.wsj.net/im-587905/?width=860&size=1.5',
    randomText: 'I have uploaded my first content on senet',
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

const Problems = ({ navigation, themedStyle }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.verticleView}>
        <Text style={styles.rankText}>{item.TrendingRank}</Text>
          <Text style={styles.randomText}>{item.randomText}</Text>
          <View style={styles.reactionsContainer}>
            <Text style={styles.reactionsCount}>{item.reactions}</Text>
            <Text style={styles.reactionsText}>Reactions</Text>
            
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
    alignItems:'flex-start'
  },
  verticleView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  randomText: {
    marginTop: 10,
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
  }
});

export default Problems;
