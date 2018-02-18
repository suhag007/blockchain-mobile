import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dollarValue: '1',
      xlmbitbns: '',
      xlmbinance: '',

      xrpbitbns: '',
      xrpbinance: '',

      neobitbns: '',
      neobinance: '',

      gasbitbns: '',
      gasbinance: ''
    };
    // this.handleClick = this.handleClick.bind(this);
    this.getDollarValue = this.getDollarValue.bind(this);
    this.setDollarValue = this.setDollarValue.bind(this);
    // this.getBitBnsStatus = this.getBitBnsStatus.bind(this);
  }

  componentWillMount() {
    this.getDollarValue();
    // this.getBitBnsStatus();
  }


  getDollarValue() {
    // Make a request for a user with a given ID
    axios.get('https://api.fixer.io/latest?base=USD')
      .then( (response) => {
        console.log("function is called");
        console.log(response);
        this.setDollarValue(response.data.rates.INR);
        // this.setState({dollarValue: response.data.rates.INR});
        // this.setState({
        //   dollarValue: response.data.rates.INR
        // });
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  setDollarValue => (text) {
    this.setState({
      dollarValue: text
    });
  }

  // getBitBnsStatus() {
  //   axios.get('https://bitbns.com/order/getTickerAll')
  //      .then((result) => {
  //          console.log(result);
  //          // this.setState({
  //          //    xlmbitbns: '',
  //          //    xrpbitbns: '',
  //          //    neobitbns: '',
  //          //    gasbitbns: '',
  //          // });
  //      })
  // }



  render() {
    return (
      <View style={styles.container}>
        <Text>Enter Value {this.state.dollarValue}</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Investment amount"
          onChangeText={(text) => this.setState({dollarValue})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.dollarValue}
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
