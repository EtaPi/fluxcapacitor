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

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import LoginSceneContainer from './containers/login_container'
import todoApp from './reducers/index'

let store = createStore( todoApp )

class FluxNative extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }

  renderLogin(navigator) {
    return (
      <LoginSceneContainer
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
