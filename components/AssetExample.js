import React, { Component } from 'react';
import { View, TextInput} from 'react-native';

export default class AssetExample extends Component {
  render() {
      return (
      <View style={{padding: 10, backgroundColor:'white'}}>
      <TextInput style={{height: 40}} placeholder='Massa (kg)'/>
      <TextInput style={{height: 40}} placeholder='Tinggi (cm)'/>
      </View>
            );
          }
        }