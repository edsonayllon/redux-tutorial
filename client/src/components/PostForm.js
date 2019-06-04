import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class PostForm extends React.Component {
  state = {
    title: '',
    body: ''
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text style={{fontSize: 30, marginBottom: 10}}>Add Post</Text>
        <Text style={{marginBottom: 10}}>Title</Text>
        <TextInput
          style={{marginBottom: 10, height: 50, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10}}
          placeholder="Title"
          onChangeText={(title) => this.setState({title}) }
          value={this.state.title}
        />
        <Text style={{marginBottom: 10}}>Body</Text>
        <TextInput
          style={{marginBottom: 10, height: 100, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10}}
          placeholder="Body"
          onChangeText={(body) => this.setState({body}) }
          value={this.state.body}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
