// Example to Pick and Upload files in React Native
// https://aboutreact.com/file-uploading-in-react-native/

// Import React
import React, {useState} from 'react';
// Import core components
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  PermissionsAndroid,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// Import Document Picker
// import DocumentPicker from 'react-native-document-picker';
// //import { TextInput } from 'react-native-gesture-handler';

const PostUploadText = () => {
  const [filePath, setFilePath] = useState(null);
  //const [singleFile, setSingleFile] = useState(null);
  const [userPost, setUserPost] = useState('');
  const uploadImage = async () => {
    // Check if any file is selected or not
    if (filePath != null) {
      // If file selected then create FormData
      const fileToUpload = filePath;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      // Please change file upload URL
      let res = await fetch('https://dd92-203-110-242-41.in.ngrok.io/upload', {
        method: 'post',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data; ',
        },
      });
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('Upload Successful');
      }
    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };

  //   const selectFile = async () => {
  //     // Opening Document Picker to select one file
  //     try {
  //       const res = await DocumentPicker.pick({
  //         // Provide which type of file you want user to pick
  //         type: [DocumentPicker.types.allFiles],
  //         // There can me more options as well
  //         // DocumentPicker.types.allFiles
  //         // DocumentPicker.types.images
  //         // DocumentPicker.types.plainText
  //         // DocumentPicker.types.audio
  //         // DocumentPicker.types.pdf
  //       });
  //       // Printing the log realted to the file
  //       console.log('res : ' + JSON.stringify(res));
  //       // Setting the state to show single file attributes
  //       setSingleFile(res);
  //     } catch (err) {
  //       setSingleFile(null);
  //       // Handling any exception (If any)
  //       if (DocumentPicker.isCancel(err)) {
  //         // If user canceled the document selection
  //         alert('Canceled');
  //       } else {
  //         // For Unknown Error
  //         alert('Unknown Error: ' + JSON.stringify(err));
  //         throw err;
  //       }
  //     }
  //   };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          return;
        } else if (response.errorCode == 'permission') {
          return;
        } else if (response.errorCode == 'others') {
          return;
        }

        console.log('base64 -> ', response.assets[0].base64);
        console.log('uri -> ', response.assets[0].uri);
        console.log('width -> ', response.assets[0].width);
        console.log('height -> ', response.assets[0].height);
        console.log('fileSize -> ', response.assets[0].fileSize);
        console.log('type -> ', response.assets[0].type);
        console.log('fileName -> ', response.assets[0].fileName);

        setFilePath(response.assets[0]);
      });
    }
  };

  const chooseFile = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      presentationStyle: 'pageSheet',
      // selectionLimit: 0,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        // alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        // alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        //alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        //salert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.assets[0].base64);
      console.log('uri -> ', response.assets[0].uri);
      console.log('width -> ', response.assets[0].width);
      console.log('height -> ', response.assets[0].height);
      console.log('fileSize -> ', response.assets[0].fileSize);
      console.log('type -> ', response.assets[0].type);
      console.log('fileName -> ', response.assets[0].fileName);
      setFilePath(response.assets[0]);
    });
  };

  return (
    <View style={styles.mainBody}>
      {/* {singleFile != null ? ( */}
      {/* // <Text style={styles.textStyle}>
        //   File Name: {singleFile.name ? singleFile.name : ''}
        //   {'\n'}
        //   Type: {singleFile.type ? singleFile.type : ''}
        //   {'\n'}
        //   File Size: {singleFile.size ? singleFile.size : ''}
        //   {'\n'}
        //   URI: {singleFile.uri ? singleFile.uri : ''}
        //   {'\n'}
        // </Text> */}

      {/* ) : null} */}
      <View style={styles.v1}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={UserPost => setUserPost(UserPost)}
          placeholder="Say Somthing..." //dummy@abc.com
          placeholderTextColor="#8b9cb5"
          multiline={true}
          autoCapitalize="none"
          // keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current && passwordInputRef.current.focus()
          }
          underlineColorAndroid="#f000"
          blurOnSubmit={false}
        />
      </View>

      {/* <TouchableOpacity
        style={styles.attachmentStyle}
        activeOpacity={0.5}
        onPress={selectFile}>
        <Image
          style={styles.avatar}
          source={require('senet/assets/attachments.png')}
        />
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => chooseFile('photo')}
        style={{
          flexDirection: 'row',

          margin: 10,
        }}>
        <Ionicons
          name="image-outline"
          color="#57565B"
          size={35}
          style={{marginRight: 10, marginTop: 10}}
        />
        <Text style={{marginTop: 16, fontSize: 15, color: '#57565B'}}>
          Add Image
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => captureImage('photo')}
        style={{
          flexDirection: 'row',

          margin: 10,
        }}>
        <Ionicons
          name="camera-outline"
          color="#57565B"
          size={35}
          style={{marginRight: 10, marginTop: 10}}
        />
        <Text style={{marginTop: 16, fontSize: 15, color: '#57565B'}}>
          Camera
        </Text>
      </TouchableOpacity>
      {filePath != null ? (
        <View style={styles.v2}>
          <Ionicons
            name="close-circle-outline"
            size={20}
            color="#57565B"
            style={{position: 'absolute', right: 0, top: 0}}
            onPress={() => setFilePath(null)}
          />
          <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
        </View>
      ) : null}
      <TouchableOpacity
        style={styles.buttonStyleSubmit}
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={styles.buttonTextStyle}>POST</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  v1: {
    height: 100,
    width: 300,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  v2: {
    height: 120,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mainBody: {
    flex: 1,

    padding: 20,
  },
  buttonStyleSubmit: {
    justifyContent: 'center',
    backgroundColor: '#1A5DB4',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#1A5DB4',
    height: 60,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 150,
    marginBottom: 20,
  },
  buttonStyleUpload: {
    justifyContent: 'center',
    backgroundColor: '#57565B',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#000000',
    height: 60,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
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
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,

    borderColor: '#FFFFFF',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    color: '#000000',
    paddingLeft: 15,
    height: 100,

    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
    backgroundColor: '#D9D9D9',
  },
  attachmentStyle: {
    justifyContent: 'center',
    backgroundColor: '#57565B',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#000000',
    height: 60,
    width: 60,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,

    marginLeft: 35,
    marginRight: 35,
    marginTop: 35,
    marginBottom: 20,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default PostUploadText;
