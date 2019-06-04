import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PostForm />
        <View style={{borderBottomWidth: 1, width: '100%', margin: 50, marginHorizontal: 0}}></View>
        <Posts />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
  },
  image: {
    width: 100,
    height: 120,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
