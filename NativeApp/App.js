import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Image source={{uri:"https://picsum.photos/200/300"}} style={styles.image} />
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
    height: 300,
  }
});

export default App;
