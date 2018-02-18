import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      xlmbitbns: '',
      xlmbinance: '',

      xrpbitbns: '',
      xrpbinance: '',

      neobitbns: '',
      neobinance: '',

      gasbitbns: '',
      gasbinance: ''
    };
  }

  componentWillMount() {
    this.getDollarValue();
  }


  getDollarValue() {
    // Make a request for a user with a given ID
    axios.get('https://api.fixer.io/latest?base=USD')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Enter Value!</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Investment amount"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

 const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,
  },
 });
