import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Posts extends React.Component {
  state = {
    posts: []
  }

  async componentDidMount() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const json = await res.json();
      this.setState({ posts: json });
  }

  render() {
    console.log(this.state);
    const postItems = this.state.posts.map(post => {
      return(
        <View key={post.id} style={{marginTop: 20}}>
          <Text style={{fontSize: 16, fontWeight: '900', marginBottom: 10}}>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      )
    })

    return (
      <View>
        <Text style={{fontSize: 30}}>Posts</Text>
        {postItems}
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
