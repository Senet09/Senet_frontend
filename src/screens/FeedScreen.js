// // import React, {Component, useState, useEffect} from 'react';
// // import {
// //   Image,
// //   View,
// //   TouchableOpacity,
// //   Text,
// //   FlatList,
// //   StyleSheet,
// //   Button,
// //   Pressable,
// // } from 'react-native';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import {Header} from 'react-native-elements';
// // import {Avatar} from 'react-native-paper';

// // const DATA = [
// //   {
// //     id: 1,
// //     name: 'John Doe',
// //     postTitle: 'President',
// //     avatarURI:
// //       'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
// //     imageURI: 'https://images.wsj.net/im-587905/?width=860&size=1.5',
// //     randomText: 'I have uploaded my first content on senet ',
// //     buttonActive: '!active',
// //   },
// //   {
// //     id: 2,
// //     name: 'Jeus Troy',
// //     postTitle: 'Prime Minister',
// //     avatarURI:
// //       'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
// //     imageURI:
// //       'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400/https://www.eastasiaforum.org/wp-content/uploads/2022/08/2022-06-09T104359Z_646144941_MT1SIPA000FI29QE_RTRMADP_3_SIPA-USA-400x241.jpg',
// //     randomText: 'This is the second post',
// //     buttonActive: 'active',
// //   },
// // ];

// // const Feed = ({navigation, themedStyle}) => {
// //   React.useLayoutEffect(() => {
// //     navigation.setOptions({
// //       headerTitle: props => (
// //         <Text
// //           {...props}
// //           style={{
// //             color: 'white',
// //             fontSize: 20,
// //             fontFamily: 'layfairDisplay-SemiBold',
// //             fontWeight: 'bold',
// //           }}>
// //           SENET
// //         </Text>
// //       ),
// //       headerStyle: {
// //         backgroundColor: '#1A5DB4', //Set Header color
// //       },
// //       headerRight: () => (
// //         <Ionicons
// //           name="chatbox-outline"
// //           size={30}
// //           color="white"
// //           style={{marginRight: 10}}
// //           onPress={() => navigation.navigate('MessagesScreen')}
// //         />
// //       ),
// //     });
// //   }, [navigation]);

// //   const [active, setActive] = useState(false);

// //   useEffect(() => {
// //     // Update the document title using the browser API
// //     if (DATA.buttonActive === 'active') {
// //       setActive(active);
// //     } else if (DATA.buttonActive === '!active') {
// //       setActive(!active);
// //     }
// //   });
// //   const renderItem = ({item, index}) => {
// //     const handleClick = () => {
// //       if (item.buttonActive == 'active') {
// //         setActive(!active);
// //       } else if (item.buttonActive == '!active') {
// //         setActive(active);
// //       }
// //     };
// //     return (
// //       <View style={styles.card}>
// //         <View style={styles.verticleView}>
// //           <TouchableOpacity
// //           //onPress={() => navigation.navigate('Profile')}
// //           style={{ height: 30, width: 30, borderRadius: 24}}
// //           >
// //             <Avatar.Image
// //               source={{uri: item.avatarURI}}
// //               size={24}
// //               style={styles.cardAvatar}
// //             />
// //           </TouchableOpacity>

// //           <Text style={styles.cardTitle1}>{item.name}</Text>
// //         </View>
// //         <Image source={{uri: item.imageURI}} style={styles.cardImage} />

// //         <View style={styles.verticleView}>
// //           <Pressable
// //             style={({pressed}) => [
// //               {
// //                 backgroundColor: pressed ? '#5a6373' : 'black',
// //               },
// //               styles.buttonStyle,
// //             ]}
// //             onPress={handleClick}></Pressable>

// //           <Pressable
// //             style={({pressed}) => [
// //               {
// //                 backgroundColor: pressed ? '#5a6373' : 'black',
// //               },
// //               styles.buttonStylelight,
// //               {
// //                 backgroundColor: active ? '#FF5E3B' : '#871D07',
// //               },
// //             ]}
// //             //onPress={con}
// //           ></Pressable>
// //           <View style={{marginRight: 100}}>
// //             <MaterialCommunityIcons
// //               name="account-tie-voice"
// //               size={30}
// //               //onPress={() => navigation.navigate('MessagesScreen')}
// //               color="black"
// //               marginRight={100}
// //               style={{marginRight: 10}}
// //             />
// //           </View>
// //           <View>
// //             <Ionicons
// //               name="share-social-outline"
// //               marginRight={100}
// //               color={'#000000'}
// //               size={30}
// //             />
// //           </View>
// //         </View>

// //         <View style={styles.cardHeader}>
// //           <Text category="s1" style={styles.cardTitle}>
// //             {item.postTitle}
// //           </Text>
// //         </View>
// //         <View style={styles.cardContent}>
// //           <Text>{item.randomText}</Text>
// //         </View>
// //       </View>
// //     );
// //   };

// //   return (
// //     <FlatList
// //       style={styles.container}
// //       data={DATA}
// //       renderItem={renderItem}
// //       keyExtractor={DATA.id}
// //     />
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   card: {
// //     backgroundColor: '#fff',
// //     marginBottom: 25,
// //   },
// //   cardImage: {
// //     width: '100%',
// //     height: 300,
// //   },
// //   buttonStyle: {
// //     justifyContent: 'center',
// //     backgroundColor: '#1A5DB4',
// //     borderWidth: 0,
// //     color: '#FFFFFF',
// //     borderColor: '#1A5DB4',
// //     height: 10,
// //     width: 20,
// //     alignItems: 'center',
// //     borderRadius: 10,
// //     paddingVertical: 12,
// //     paddingHorizontal: 32,
// //     marginLeft: 10,
// //     marginRight: 20,
// //     marginTop: 10,
// //     marginBottom: 20,
// //   },
// //   buttonTextStyle: {
// //     fontFamily: 'PlayfairDisplay-SemiBold',
// //     fontSize: 16,
// //     lineHeight: 21,
// //     fontWeight: 'bold',
// //     letterSpacing: 0.25,
// //     color: 'white',
// //   },
// //   buttonStylelight: {
// //     justifyContent: 'center',

// //     borderWidth: 0,
// //     color: '#FFFFFF',
// //     borderColor: '#1A5DB4',
// //     height: 10,
// //     width: 25,
// //     alignItems: 'center',
// //     borderRadius: 70,
// //     paddingVertical: 12,
// //     //paddingHorizontal: 32,
// //     marginLeft: 5,
// //     marginRight: 35,
// //     marginTop: 10,
// //     marginBottom: 20,
// //   },
// //   verticleView: {
// //     flexDirection: 'row',
// //     width: '100%',
// //   },
// //   cardHeader: {
// //     padding: 10,
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //   },
// //   cardTitle: {
// //     color: '#444',
// //   },
// //   cardTitle1: {
// //     color: '#444',
// //     fontSize: 15,
// //     marginTop: 15,
// //   },
// //   cardAvatar: {
// //     margin: 16,
// //     height: 30,
// //     width: 30,
// //     borderRadius: 24
// //   },
// //   cardContent: {
// //     padding: 10,
// //     borderWidth: 0.25,
// //     borderColor: '#eee',
// //   },
// // });

// // export default Feed;
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
// import ICONS from '../../data/icon.js'
// const Feed = () => {
//   const data = [
//     {
//       id: 1,
//       avatar: require('senet/assets/users/user-1.jpg'),
//       name: 'John Doe',
//       username: '@johndoe',
//       caption: 'This is the caption of the post.',
//       image: require('senet/assets/users/user-2.jpg'),
//       likes: 10,
//     },
//     // Add more feed items as needed
//   ];

//   const handleFollow = () => {
//     // Handle follow action here
//   };

//   const handleLike = (item) => {
//     // Handle like action here
//   };

//   const handleComment = (item) => {
//     // Handle comment action here
//   };

//   const handleShare = (item) => {
//     // Handle share action here
//   };

//   const renderFeedItem = ({ item }) => (
//     <View style={styles.feedItem}>
      
//       <View style={styles.avatarContainer}>
//         <Image source={item.avatar} style={styles.avatar} />
//       </View>
//       <View style={styles.userInfo}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.username}>{item.username}</Text>
//       </View>
//       <TouchableOpacity style={styles.followButton} onPress={handleFollow}>
//         <Text style={styles.followText}>Follow</Text>
//       </TouchableOpacity>
      
//       <Text style={styles.caption}>{item.caption}</Text>
//       <Image source={item.image} style={styles.image} />
//       <View style={styles.actionsContainer}>
//         <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(item)}>
//           <Image source={require('senet/assets/icons/heart.png')} style={styles.icon} />
//           <Text style={styles.count}>{item.likes} likes</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButton} onPress={() => handleComment(item)}>
//           <Image source={require('senet/assets/icons/comment.png')} style={styles.icon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButton} onPress={() => handleShare(item)}>
//           <Image source={require('senet/assets/icons/share.png')} style={styles.icon} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderFeedItem}
//       />
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     paddingTop: 16,
//   },
//   feedItem: {
//     marginBottom: 12,
//   },
//   avatarContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   avatar: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//   },
//   userInfo: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   username: {
//     fontSize: 14,
//     color: '#888',
//   },
//   followButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 16,
//     backgroundColor: '#1e90ff',
//   },
//   followText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   caption: {
//     marginBottom: 8,
//     fontSize: 14,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginBottom: 8,
//   },
//   actionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     marginRight: 4,
//   },
//   count: {
//     fontSize: 14,
//   },
// };

// export default Feed;
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

// const Feed = () => {
//   const data = [
//     {
//       id: 1,
//       avatar: require('senet/assets/users/user-1.jpg'),
//       name: 'John Doe',
//       username: '@johndoe',
//       caption: 'This is the caption of the post.',
//       image: require('senet/assets/users/user-2.jpg'),
//       likes: 10,
//     },
//     // Add more feed items as needed
//   ];

//   const handleFollow = () => {
//     // Handle follow action here
//   };

//   const handleLike = (item) => {
//     // Handle like action here
//   };

//   const handleComment = (item) => {
//     // Handle comment action here
//   };

//   const handleShare = (item) => {
//     // Handle share action here
//   };

//   const renderFeedItem = ({ item }) => (
//     <View style={styles.feedItem}>
//       <View style={styles.avatarContainer}>
//         <Image source={item.avatar} style={styles.avatar} />
//         <View style={styles.userInfo}>
//           <Text style={styles.name}>{item.name}</Text>
//           <Text style={styles.username}>{item.username}</Text>
//         </View>
//       </View>
//       <TouchableOpacity style={styles.followButton} onPress={handleFollow}>
//         <Text style={styles.followText}>Follow</Text>
//       </TouchableOpacity>
//       <Text style={styles.caption}>{item.caption}</Text>
//       <Image source={item.image} style={styles.image} />
//       <View style={styles.actionsContainer}>
//         <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(item)}>
//           <Image source={require('senet/assets/icons/heart.png')} style={styles.icon} />
//           <Text style={styles.count}>{item.likes} likes</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButton} onPress={() => handleComment(item)}>
//           <Image source={require('senet/assets/icons/comment.png')} style={styles.icon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButton} onPress={() => handleShare(item)}>
//           <Image source={require('senet/assets/icons/share.png')} style={styles.icon} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderFeedItem}
//       />
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     paddingTop: 16,
//   },
//   feedItem: {
//     marginBottom: 12,
//   },
//   avatarContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   avatar: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//   },
//   userInfo: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   username: {
//     fontSize: 14,
//     color: '#888',
//   },
//   followButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 16,
//     backgroundColor: '#1e90ff',
//   },
//   followText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   caption: {
//     marginBottom: 8,
//     fontSize: 14,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginBottom: 8,
//   },
//   actionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     marginRight: 4,
//   },
//   count: {
//     fontSize: 14,
//   },
// };

// export default Feed;
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

// const Feed = () => {
//   const data = [
//     {
//       id: 1,
//       avatar: require('senet/assets/users/user-1.jpg'),
//       name: 'John Doe',
//       username: '@johndoe',
//       caption: 'This is the caption of the post.',
//       image: require('senet/assets/users/user-2.jpg'),
//       likes: 10,
//     },
//     // Add more feed items as needed
//   ];

//   const handleFollow = () => {
//     // Handle follow action here
//   };

//   const handleLike = (item) => {
//     // Handle like action here
//   };

//   const handleComment = (item) => {
//     // Handle comment action here
//   };

//   const handleShare = (item) => {
//     // Handle share action here
//   };

//   const renderFeedItem = ({ item }) => (
//     <View style={styles.feedItem}>
//       <View style={styles.border}>
//         <View style={styles.avatarContainer}>
//           <Image source={item.avatar} style={styles.avatar} />
//           <View style={styles.userInfo}>
//             <Text style={styles.name}>{item.name}</Text>
//             <Text style={styles.username}>
//               {item.username}
//               <Text style={styles.dot}> · </Text>
//               <Text style={styles.followButton} onPress={handleFollow}>
//                 Follow
//               </Text>
//             </Text>
//           </View>
//         </View>
//         <Text style={styles.caption}>{item.caption}</Text>
//         <Image source={item.image} style={styles.image} />
//         <View style={styles.actionsContainer}>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(item)}>
//             <Image source={require('senet/assets/icons/heart.png')} style={styles.icon} />
//             <Text style={styles.count}>{item.likes} likes</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleComment(item)}>
//             <Image source={require('senet/assets/icons/comment.png')} style={styles.icon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleShare(item)}>
//             <Image source={require('senet/assets/icons/share.png')} style={styles.icon} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderFeedItem}
//       />
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     paddingTop: 16,
//   },
//   feedItem: {
//     marginBottom: 12,
//   },
//   border: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 8,
//   },
//   avatarContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   avatar: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//   },
//   userInfo: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   username: {
//     fontSize: 14,
//     color: '#888',
//   },
//   dot: {
//     color: '#888',
//   },
//   followButton: {
//     color: 'blue',
//     fontWeight: 'bold',
//   },
//   caption: {
//     marginBottom: 8,
//     fontSize: 14,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginBottom: 8,
//   },
//   actionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     marginRight: 4,
//   },
//   count: {
//     fontSize: 14,
//   },
// };

// export default Feed;
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// const Feed = ({navigation}) => {
//   React.useLayoutEffect(() => {
//         navigation.setOptions({
//           headerTitle: props => (
//             <Text
//               {...props}
//               style={{
//                 color: 'white',
//                 fontSize: 20,
//                 fontFamily: 'layfairDisplay-SemiBold',
//                 fontWeight: 'bold',
//               }}>
//               SENET
//             </Text>
//           ),
//           headerStyle: {
//             backgroundColor: '#1A5DB4', //Set Header color
//           },
//           headerRight: () => (
//             <Ionicons
//               name="chatbox-outline"
//               size={30}
//               color="white"
//               style={{marginRight: 10}}
//               onPress={() => navigation.navigate('MessagesScreen')}
//             />
//           ),
//         });
//       }, [navigation]);
//   const data = [
//     {
//       id: 1,
//       avatar: require('senet/assets/users/user-1.jpg'),
//       name: 'John Doe',
//       username: '@johndoe',
//       caption: 'This is the caption of the post.',
//       image: require('senet/assets/users/user-2.jpg'),
//       likes: 10,
//     },
//     // Add more feed items as needed
//   ];

//   const handleFollow = () => {
//     // Handle follow action here
//   };

//   const handleLike = (item) => {
//     // Handle like action here
//   };

//   const handleComment = (item) => {
//     // Handle comment action here
//   };

//   const handleShare = (item) => {
//     // Handle share action here
//   };

//   const renderFeedItem = ({ item }) => (
//     <View style={styles.feedItem}>
//       <View style={styles.border}>
//         <View style={styles.avatarContainer}>
//           <Image source={item.avatar} style={styles.avatar} />
//           <View style={styles.userInfo}>
//             <Text style={styles.name}>{item.name}</Text>
//             <Text style={styles.username}>
//               {item.username}
//               <Text style={styles.dot}> · </Text>
//               <Text style={styles.followButton} onPress={handleFollow}>
//                 Follow
//               </Text>
//             </Text>
//           </View>
//         </View>
//         <Text style={styles.caption}>{item.caption}</Text>
//         <Image source={item.image} style={styles.image} />
//         <View style={styles.actionsContainer}>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(item)}>
//             <Image source={require('senet/assets/icons/heart.png')} style={styles.icon} />
//             <Text style={styles.count}>{item.likes} likes</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleComment(item)}>
//             <Image source={require('senet/assets/icons/comment.png')} style={styles.icon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleShare(item)}>
//             <Image source={require('senet/assets/icons/share.png')} style={styles.icon} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderFeedItem}
//       />
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     paddingTop: 16,
//   },
//   feedItem: {
//     marginBottom: 12,
//   },
//   border: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 8,
//   },
//   avatarContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   avatar: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//   },
//   userInfo: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   username: {
//     fontSize: 14,
//     color: 'black',
//   },
//   dot: {
//     color: 'black',
//   },
//   followButton: {
//     color: 'blue',
//     fontWeight: 'bold',
//   },
//   caption: {
//     marginBottom: 8,
//     fontSize: 14,
//     color: 'black',
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginBottom: 8,
//   },
//   actionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 8,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     marginRight: 4,
//   },
//   count: {
//     fontSize: 14,
//     color: 'black',
//     marginLeft: 4,
//   },
// };

// export default Feed;
// import React,{useState} from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const Feed = ({ navigation }) => {
//   const [isFollowed, setFollowed] = useState(false);
//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTitle: (props) => (
//         <Text
//           {...props}
//           style={{
//             color: 'white',
//             fontSize: 20,
//             fontFamily: 'layfairDisplay-SemiBold',
//             fontWeight: 'bold',
//           }}>
//           SENET
//         </Text>
//       ),
//       headerStyle: {
//         backgroundColor: '#1A5DB4', //Set Header color
//       },
//       headerRight: () => (
//         <Ionicons
//           name="chatbox-outline"
//           size={30}
//           color="white"
//           style={{ marginRight: 10 }}
//           onPress={() => navigation.navigate('MessagesScreen')}
//         />
//       ),
//     });
//   }, [navigation]);

//   const data = [
//     {
//       id: 1,
//       avatar: require('senet/assets/users/user-1.jpg'),
//       name: 'John Doe',
//       username: '@johndoe',
//       caption: 'This is the caption of the post.',
//       image: require('senet/assets/users/user-2.jpg'),
//       likes: 10,
//     },
//     // Add more feed items as needed
//   ];

//   const handleFollow = () => {
//     // Handle follow action here
//     if(isFollowed){
//       setFollowed(false);
//     }else{
//     setFollowed(true);
//     }
//   };

//   const handleLike = (item) => {
//     // Handle like action here
//   };

//   const handleComment = (item) => {
//     // Handle comment action here
//   };

//   const handleShare = (item) => {
//     // Handle share action here
//   };
 

//   const renderFeedItem = ({ item }) => (
//     <View style={styles.feedItem}>
//       <View style={styles.border}>
//         <View style={styles.avatarContainer}>
//           <Image source={item.avatar} style={styles.avatar} />
//           <View style={styles.userInfo}>
//             <Text style={styles.name}>{item.name}</Text>
//             <Text style={styles.username}>
//               {item.username}
//               <Text style={styles.dot}> · </Text>
//  <TouchableOpacity
// style={[styles.followButton, isFollowed && styles.followButtonBlur]}
// onPress={handleFollow}
// >
// <Text style={styles.followButtonText}>{isFollowed ? 'Supported' : 'Support'}</Text>
// </TouchableOpacity>
//            </Text>
//           </View>
//         </View>
//         <Text style={styles.caption}>{item.caption}</Text>
//         <Image source={item.image} style={styles.image} />
//         <View style={styles.actionsContainer}>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(item)}>
//             <Image source={require('senet/assets/icons/heart.png')} style={styles.icon} />
//             <Text style={styles.count}>{item.likes} likes</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleComment(item)}>
//             <Image source={require('senet/assets/icons/comment.png')} style={styles.icon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleShare(item)}>
//             <Image source={require('senet/assets/icons/share.png')} style={styles.icon} />
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity style={styles.commentButton} onPress={() => handleComment(item)}>
//           <Text style={styles.commentButtonText}>Comment</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={renderFeedItem} />
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     paddingTop: 16,
//   },
//   feedItem: {
//     marginBottom: 12,
//   },
//   border: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 8,
//   },
//   avatarContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   avatar: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//   },
//   userInfo: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   username: {
//     fontSize: 14,
//     color: 'black',
//   },
//   dot: {
//     color: 'black',
//   },
//   followButton: {
   
//     fontWeight: 'bold',
  

//   },
//   caption: {
//     marginBottom: 8,
//     fontSize: 14,
//     color: 'black',
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginBottom: 8,
//   },
//   actionsContainer: {
//     flexDirection: 'row',
//     marginBottom: 8,
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 8,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     marginRight: 4,
//   },
//   count: {
//     fontSize: 14,
//     color: 'black',
//     marginLeft: 4,
//   },
//   commentButton: {
//     alignSelf: 'center',
//     borderColor: '#1A5DB4',
//     borderRadius: 20,
//     borderWidth: 1,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     marginTop: 8,
//     width: '100%',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   commentButtonText: {
//     color: '#1A5DB4',
//     alignSelf: 'center',
//     fontSize: 16,
//     fontWeight: 'bold',

//   },

// followButtonBlur: {
//   backgroundColor: '#ffffff',
// },
// followButtonText: {
//   color: 'blue',
//   fontWeight: 'bold',
// },
//   blurredText: {
//     textShadowColor: 'rgba(0, 0, 0, 0.5)',
//     textShadowOffset: { width: -1, height: 1 },
//     textShadowRadius: 1,
//   },
// };

// export default Feed;
// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

// const Feed = () => {
//   const [isFollowed, setFollowed] = useState(false);

//   const data = [
//     {
//       id: 1,
//       avatar: require('senet/assets/users/user-1.jpg'),
//       name: 'John Doe',
//       username: '@johndoe',
//       caption: 'This is the caption of the post.',
//       image: require('senet/assets/users/user-2.jpg'),
//       likes: 10,
//     },
//     // Add more feed items as needed
//   ];

//   const handleFollow = () => {
//     setFollowed(true);
//     // Handle follow action here
//   };

//   const handleLike = (item) => {
//     // Handle like action here
//   };

//   const handleComment = (item) => {
//     // Handle comment action here
//   };

//   const handleShare = (item) => {
//     // Handle share action here
//   };

//   const renderFeedItem = ({ item }) => (
//     <View style={styles.feedItem}>
//       <View style={styles.border}>
//         <View style={styles.avatarContainer}>
//           <Image source={item.avatar} style={styles.avatar} />
//           <View style={styles.userInfo}>
//             <Text style={styles.name}>{item.name}</Text>
//             <Text style={styles.username}>
//               {item.username}
//               <Text style={styles.dot}> · </Text>
//               <TouchableOpacity
//                 style={[styles.followButton, isFollowed && styles.followButtonBlur]}
//                 onPress={handleFollow}
//                 disabled={isFollowed}>
//                 <Text style={styles.followButtonText}>{isFollowed ? 'Followed' : 'Follow'}</Text>
//               </TouchableOpacity>
//             </Text>
//           </View>
//         </View>
//         <Text style={styles.caption}>{item.caption}</Text>
//         <Image source={item.image} style={styles.image} />
//         <View style={styles.actionsContainer}>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(item)}>
//             <Image source={require('senet/assets/icons/heart.png')} style={styles.icon} />
//             <Text style={styles.count}>{item.likes} likes</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleComment(item)}>
//             <Image source={require('senet/assets/icons/comment.png')} style={styles.icon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleShare(item)}>
//             <Image source={require('senet/assets/icons/share.png')} style={styles.icon} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderFeedItem}
//       />
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     paddingTop: 16,
//   },
//   feedItem: {
//     marginBottom: 12,
//   },
//   border: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 8,
//   },
//   avatarContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   avatar: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//   },
//   userInfo: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   username: {
//     fontSize: 14,
//     color: 'black',
//   },
//   dot: {
//     color: 'black',
//   },
//   followButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 16,
//     backgroundColor: '#1e90ff',
//   },
//   followButtonBlur: {
//     backgroundColor: '#ccc',
//   },
//   followButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   caption: {
//     marginBottom: 8,
//     fontSize: 14,
//     color: 'black',
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginBottom: 8,
//   },
//   actionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 8,
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 8,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     marginRight: 4,
//   },
//   count: {
//     fontSize: 14,
//     color: 'black',
//     marginLeft: 4,
//   },
// };

// export default Feed;
// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const Feed = ({ navigation }) => {
//   const [isFollowed, setFollowed] = useState(false);
//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTitle: (props) => (
//         <Text
//           {...props}
//           style={{
//             color: 'white',
//             fontSize: 20,
//             fontFamily: 'layfairDisplay-SemiBold',
//             fontWeight: 'bold',
//           }}>
//           SENET
//         </Text>
//       ),
//       headerStyle: {
//         backgroundColor: '#1A5DB4', //Set Header color
//       },
//       headerRight: () => (
//         <Ionicons
//           name="chatbox-outline"
//           size={30}
//           color="white"
//           style={{ marginRight: 10 }}
//           onPress={() => navigation.navigate('MessagesScreen')}
//         />
//       ),
//     });
//   }, [navigation]);

//   const data = [
//     {
//       id: 1,
//       avatar: require('senet/assets/users/user-1.jpg'),
//       name: 'John Doe',
//       username: '@johndoe',
//       caption: 'This is the caption of the post.',
//       image: require('senet/assets/users/user-2.jpg'),
//       likes: 10,
//       timestamp: '10:30 AM',
//       date: 'July 17, 2023',
//     },
//     // Add more feed items as needed
//   ];

//   const handleFollow = () => {
//     // Handle follow action here
//     if (isFollowed) {
//       setFollowed(false);
//     } else {
//       setFollowed(true);
//     }
//   };

//   const handleLike = (item) => {
//     // Handle like action here
//   };

//   const handleComment = (item) => {
//     // Handle comment action here
//   };

//   const handleShare = (item) => {
//     // Handle share action here
//   };

//   const renderFeedItem = ({ item }) => (
//     <View style={styles.feedItem}>
//       <View style={styles.border}>
//         <View style={styles.avatarContainer}>
//           <Image source={item.avatar} style={styles.avatar} />
//           <View style={styles.userInfo}>
//             <Text style={styles.name}>{item.name}</Text>
//             <Text style={styles.username}>
//               {item.username}
//               <Text style={styles.dot}> · </Text>
//               <TouchableOpacity
//                 style={[styles.followButton, isFollowed && styles.followButtonBlur]}
//                 onPress={handleFollow}>
//                 <Text style={styles.followButtonText}>{isFollowed ? 'Supported' : 'Support'}</Text>
//               </TouchableOpacity>
//             </Text>
//           </View>
//         </View>
//         <Text style={styles.caption}>{item.caption}</Text>
//         <Image source={item.image} style={styles.image} />
//         <View style={styles.timestampContainer}>
//           <Text style={styles.timestampText}>{item.timestamp}</Text>
//           <Text style={styles.dateText}>{item.date}</Text>
//         </View>
//         <View style={styles.actionsContainer}>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(item)}>
//             <Image source={require('senet/assets/icons/heart.png')} style={styles.icon} />
//             <Text style={styles.count}>{item.likes} likes</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleComment(item)}>
//             <Image source={require('senet/assets/icons/comment.png')} style={styles.icon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.actionButton} onPress={() => handleShare(item)}>
//             <Image source={require('senet/assets/icons/share.png')} style={styles.icon} />
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity style={styles.commentButton} onPress={() => handleComment(item)}>
//           <Text style={styles.commentButtonText}>Comment</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={renderFeedItem} />
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     paddingTop: 16,
//   },
//   feedItem: {
//     marginBottom: 12,
//   },
//   border: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 8,
//   },
//   avatarContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   avatar: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//   },
//   userInfo: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   username: {
//     fontSize: 14,
//     color: 'black',
//   },
//   dot: {
//     color: 'black',
//   },
//   followButton: {
//     fontWeight: 'bold',
//   },
//   caption: {
//     marginBottom: 8,
//     fontSize: 14,
//     color: 'black',
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginBottom: 8,
//   },
//   timestampContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   timestampText: {
//     fontSize: 12,
//     color: 'black',
//     marginRight: 4,
//   },
//   dateText: {
//     fontSize: 12,
//     color: 'black',
//   },
//   actionsContainer: {
//     flexDirection: 'row',
//     marginBottom: 8,
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 8,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     marginRight: 4,
//   },
//   count: {
//     fontSize: 14,
//     color: 'black',
//     marginLeft: 4,
//   },
//   commentButton: {
//     alignSelf: 'center',
//     borderColor: '#1A5DB4',
//     borderRadius: 20,
//     borderWidth: 1,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     marginTop: 8,
//     width: '100%',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   commentButtonText: {
//     color: '#1A5DB4',
//     alignSelf: 'center',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   followButtonBlur: {
//     backgroundColor: '#ffffff',
//   },
//   followButtonText: {
//     color: 'blue',
//     fontWeight: 'bold',
//   },
// };

// export default Feed;
// 
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Feed = ({ navigation }) => {
  const [followedItems, setFollowedItems] = useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <Text
          {...props}
          style={{
            color: 'black',
            fontSize: 20,
            fontFamily: 'layfairDisplay-SemiBold',
            fontWeight: 'bold',
          }}>
          SENET
        </Text>
      ),
      headerStyle: {
        backgroundColor: '#ffffff', //Set Header color
      },
      headerRight: () => (
        <Ionicons
          name="chatbox-outline"
          size={30}
          color="black"
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate('MessagesScreen')}
        />
      ),
    });
  }, [navigation]);

  const data = [
    {
      id: 1,
      avatar: require('senet/assets/users/user-1.jpg'),
      name: 'John Doe',
      username: '@johndoe',
      caption: 'This is the caption of the post.',
      image: require('senet/assets/users/user-2.jpg'),
      likes: 10,
      timestamp: '10:30 AM',
      date: 'July 17, 2023',
    },
    {
      id: 2,
      avatar: require('senet/assets/users/user-1.jpg'),
      name: 'John Doe',
      username: '@johndoe',
      caption: 'This is the caption of the post.',
      image: require('senet/assets/users/user-2.jpg'),
      likes: 10,
      timestamp: '10:30 AM',
      date: 'July 17, 2023',
    },{
      id: 3,
      avatar: require('senet/assets/users/user-1.jpg'),
      name: 'John Doe',
      username: '@johndoe',
      caption: 'This is the caption of the post.',
      image: require('senet/assets/users/user-2.jpg'),
      likes: 10,
      timestamp: '10:30 AM',
      date: 'July 17, 2023',
    },{
      id: 4,
      avatar: require('senet/assets/users/user-1.jpg'),
      name: 'John Doe',
      username: '@johndoe',
      caption: 'This is the caption of the post.',
      image: require('senet/assets/users/user-2.jpg'),
      likes: 10,
      timestamp: '10:30 AM',
      date: 'July 17, 2023',
    },{
      id: 5,
      avatar: require('senet/assets/users/user-1.jpg'),
      name: 'John Doe',
      username: '@johndoe',
      caption: 'This is the caption of the post.',
      image: require('senet/assets/users/user-2.jpg'),
      likes: 10,
      timestamp: '10:30 AM',
      date: 'July 17, 2023',
    },{
      id: 6,
      avatar: require('senet/assets/users/user-1.jpg'),
      name: 'John Doe',
      username: '@johndoe',
      caption: 'This is the caption of the post.',
      image: require('senet/assets/users/user-2.jpg'),
      likes: 10,
      timestamp: '10:30 AM',
      date: 'July 17, 2023',
    },
    // Add more feed items as needed
  ];

  const handleFollow = (itemId) => {
    // Find the index of the item in followedItems array
    const index = followedItems.findIndex((item) => item === itemId);

    if (index !== -1) {
      // Item is already followed, so unfollow it
      const updatedFollowedItems = [...followedItems];
      updatedFollowedItems.splice(index, 1);
      setFollowedItems(updatedFollowedItems);
    } else {
      // Item is not followed, so follow it
      setFollowedItems([...followedItems, itemId]);
    }
  };

  const handleLike = (item) => {
    // Handle like action here
  };

  const handleComment = (item) => {
    // Handle comment action here
  };

  const handleShare = (item) => {
    // Handle share action here
  };

  const renderFeedItem = ({ item }) => {

    

    return  (
    <View style={styles.feedItem}>
      <View style={styles.border}>
        <View style={styles.avatarContainer}>
          <Image source={item.avatar} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.username}>
              {item.username}
              <Text style={styles.dot}> · </Text>
              <TouchableOpacity
                style={[styles.followButton, followedItems && styles.followButtonBlur]}
                onPress={() => handleFollow(item.id)}>
                <Text style={styles.followButtonText}>{followedItems ? 'Supported' : 'Support'}</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
        <Text style={styles.caption}>{item.caption}</Text>
        <Image source={item.image} style={styles.image} />
        <View style={styles.timestampContainer}>
          <Text style={styles.timestampText}>{item.timestamp}</Text>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(item)}>
            <Image source={require('senet/assets/icons/heart.png')} style={styles.icon} />
            <Text style={styles.count}>{item.likes} likes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => handleComment(item)}>
            <Image source={require('senet/assets/icons/comment.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => handleShare(item)}>
            <Image source={require('senet/assets/icons/share.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.commentButton} onPress={() => handleComment(item)}>
          <Text style={styles.commentButtonText}>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  )};
  

  return (
    <View style={styles.container}>
      <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={renderFeedItem} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#ffffff',
  },
  feedItem: {
    marginBottom: 12,
    backgroundColor: '#ffffff',
  },
  border: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  username: {
    fontSize: 14,
    color: 'black',
  },
  dot: {
    color: 'black',
  },
  followButton: {
    fontWeight: 'bold',
  },
  caption: {
    marginBottom: 8,
    fontSize: 14,
    color: 'black',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  timestampContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  timestampText: {
    fontSize: 12,
    color: '#333333',
    marginRight: 4,
  },
  dateText: {
    fontSize: 12,
    color: '#333333',
  },
  actionsContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  count: {
    fontSize: 14,
    color: 'black',
    marginLeft: 4,
  },
  commentButton: {
    alignSelf: 'center',
    borderColor: '#1A5DB4',
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  commentButtonText: {
    color: '#1A5DB4',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  followButtonBlur: {
    backgroundColor: '#ffffff',
  },
  followButtonText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 14,
    
  },
};

export default Feed;
