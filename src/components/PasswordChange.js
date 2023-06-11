import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Pressable } from 'react-native';

const PasswordChangeScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleOldPasswordChange = (text) => {
    setOldPassword(text);
  };

  const handleNewPasswordChange = (text) => {
    setNewPassword(text);
  };

  const handleSubmit = () => {
    // Validate the old password and update the new password on your server or storage here
  };

  return (
    <View style={styles.container}>
        <View style={styles.SectionStyle}>
      <Text style={styles.label}>Enter your old password:</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Old password"
        value={oldPassword}
        onChangeText={handleOldPasswordChange}
        secureTextEntry
      />
      </View>
        <View style={styles.SectionStyle}>
      <Text style={styles.label}>Enter your new password:</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="New password"
        value={newPassword}
        onChangeText={handleNewPasswordChange}
        secureTextEntry
      />
     </View>
      <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? '#5a6373'
                        : 'black'
                },
                styles.buttonStyle
            ]} onPress={handleSubmit} >
                <Text style={styles.buttonTextStyle}>SUBMIT</Text>
            </Pressable>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    height:60,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
    backgroundColor:'#D9D9D9'
  },
  SectionStyle: {
   // flexDirection: 'row',
    height: 90,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
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
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    fontFamily:'PlayfairDisplay-SemiBold',
    fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    
  },
  
});



export default PasswordChangeScreen;