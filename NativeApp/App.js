import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

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

    setSelectedImage({ localUri: pickerResult.assets[0].uri });
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an image!</Text>
      <Image source={{uri:selectedImage.localUri || "https://picsum.photos/200/300"}} style={styles.image} />
      <TouchableOpacity 
        style={styles.button} 
        onPress={openImagePickerAsync}>
        <Text style={styles.buttonText}>Select a image</Text>
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
