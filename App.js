import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import ProgressiveImage from './ProgressiveImage';

const w = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15,
  },
});
type Props = {};
export default class App extends Component<Props> {

  render() {
    let pic = {
      uri: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format'
    };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>The name is Bond. James Bond.</Text>
        <Text style={styles.instructions}>Bond likes to stay healthy. Here, eat this banana.</Text>
        {/* <Image source={pic} style={{width: 'auto', height: 'auto', padding: 150}}/>
          <ProgressiveImage
          thumbnailSource={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=50&buster=${Math.random()}` }}
          source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=${w.width * 2}&buster=${Math.random()}` }}
          style={{ width: w.width, height: w.width }}
          resizeMode="cover"
        />*/}
        <ProgressiveImage
        thumbnailSource={{ uri: `https://images.unsplash.com/photo-1528825871115-3581a5387919?w=50&ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=&buster=${Math.random()}` }}
        source={{ uri: `https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=${w.width * 2}&buster=${Math.random()}` }}
        style={{ width: w.width, height: w.width }}
        resizeMode="cover"
      />
      </View>
    );
  }
}
