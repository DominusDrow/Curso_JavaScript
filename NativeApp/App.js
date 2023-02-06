import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFilesAsync from 'anonymous-files';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled === true) 
      return;

    if(Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.assets[0]);
      setSelectedImage({ localUri: pickerResult.assets[0], remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.assets[0], remoteUri: null });
    }

  }

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`The image is available for sharing at: ${selectedImage.localUri}`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an image!</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image source={{ uri: selectedImage !== null 
          ? selectedImage.localUri 
          : "https://picsum.photos/200/300" }} 
          style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={openShareDialogAsync}>
        <Text style={styles.buttonText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  }
});

export default App;
