/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import LoginScene from './components/login_scene'

class FluxNative extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Login', index: 0}}
        renderScene={ (route, navigator) => {
          if (route.name === 'Login') {
            return this.renderLogin(navigator);
          } else {
            return (
              <View style={styles.container}>
                <Text>Second Page</Text>
              </View>
            );
          }
        }}
      />
    );
  }

  renderLogin(navigator) {
    return (
      <LoginScene
        onLogin={ () => {
          navigator.push( {
            name: 'Main',
            index: 1,
          } );
        }}

      />
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('FluxNative', () => FluxNative);
