import React, {useState} from 'react';
const ProfilePicUpdate = () => {
  const [userImage, setUserImage] = useState(require('../assets/cena.jpg'));
  const [userName, setUserName] = useState('John Cena');
  const [userInfo, setUserInfo] = useState('The champ is here');
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  async function componentDidMount() {
    const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    setHasCameraPermission(status === 'granted');
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={pickImage}
          style={styles.TouchableOpacityStyle}>
          <MaterialCommunityIcons
            name="camera"
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        {!image && <Image style={styles.image} source={userImage} />}
        {image && <Image style={styles.image} source={{uri: userImage}} />}
      </View>
    </SafeAreaView>
  );
};

export default ProfilePicUpdate;
