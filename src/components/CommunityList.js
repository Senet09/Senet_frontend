import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const data = [
  {
    id: 1,
    image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    username: 'Indian Institute of Technology, Kharagpur',
  },
  {
    id: 2,
    image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    username: 'Indian Institute of Technology, Bombay',
  },
  {
    id: 3,
    image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    username: 'New Delhi contituency',
  },
  {
    id: 4,
    image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    username: 'Patna Sahib contituency',
  },
  {
    id: 5,
    image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    username: 'Mumbai contituency',
  },
  {
    id: 6,
    image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    username: 'Marina House',
  },
  {
    id: 7,
    image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    username: 'Indian Institute of Technology,Kanpur',
  },
  {
    id: 8,
    image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    username: 'Indian Institute of Technology,Delhi',
  },
];

const CommunityList = () => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity>
        <View style={styles.box}>
          <Image style={styles.image} source={{uri: item.image}} />
          <Text style={styles.CommunityName}>{item.username}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // const statics = [{id: 1}];

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar1.png',
              }}
            />
            <Text style={styles.name}>
              Indian Institute of Technology, Kharagpur
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        style={styles.container2}
        enableEmptySections={true}
        data={data}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container2: {
    flex: 0.5,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#1A5DB4',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    padding: 30,
    backgroundColor: '#E6E6FA',
  },
  box: {
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  CommunityName: {
    color: '#20B2AA',
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
});

export default CommunityList;
