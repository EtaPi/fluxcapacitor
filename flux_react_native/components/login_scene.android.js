import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export default class LoginScene extends Component {
  constructor(props) {
    super(props);
    console.log( this.props.state );
    Object.assign( this.props, props );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
        { this.props.state.session.status }
        </Text>
        <Text style={styles.h3}>
          Username
        </Text>
        <TextInput style={styles.input} />
        <Text style={styles.h3}>
          PIN
        </Text>
        <TextInput style={styles.input} />
        <TouchableHighlight onPress={ () => { this.props.onLogin( 'user', 'pw' ) } }
                            activeOpacity={0.95}
                            underlayColor='#9999AA'>
          <Text style={styles.h3}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container_row: {
    flexDirection: 'row'
  },
  h3: {
    fontSize: 24,
    margin: 8,
  },
  input: {
    marginBottom: 16,
    marginLeft: 32,
    marginRight: 32,
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('LoginScene', () => LoginScene);
