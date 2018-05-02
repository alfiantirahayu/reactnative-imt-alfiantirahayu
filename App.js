import React, { Component } from 'react';
import { View, TextInput, Text  } from 'react-native';
import { Button} from 'react-native';
import { Card } from 'react-native-elements';

export default class App extends Component {
state = {
    weight:0,
    height:0,
    hasil: null
  }

  weight = 0
  height = 0

  hitungIMT(weight, height){
    let imt = weight / Math.pow(height, 2)
    let ket = ''
    switch (true) {
      case (imt < 18.5) : ket = 'Berat badan kurang'; break;
      case (imt < 24.9) : ket = 'Berat badan ideal'; break;
      case (imt < 29.9) : ket = 'Berat badan berlebih'; break;
      case (imt < 39.9) : ket = 'Berat badan sangat berlebih'; break;
      default : ket = 'OBESITAS';
    }
    return { imt, ket }
  }

  
  
  render() {
    return (
      <View style={{padding: 10, backgroundColor:'white'}}>
        <Card title="BODY MASS INDEX">
         
      <TextInput style={{height: 40}} placeholder='Weight (kg)'
       onChangeText={(weight) => this.setState({weight})}
      />
      <TextInput style={{height: 40}} placeholder='Height (cm)'
       onChangeText={(height) => this.setState({height})}
      />
        
        <Button
            onPress={() => {
              this.setState({
                weight: this.weight,
                height: this.height, 
                hasil: this.hitungIMT(this.weight, this.height) 
              })
              console.log(this.weight, this.height)
            }} 
            color='purple' title='Hitung IMT'/>
        </Card>
             {
          this.state.hasil ? 
            <View style={{ paddingVertical: 10, alignItems: 'center' }}>
              <View style={ wrapperContent }>            
                <Text style={ contentColor }>Weight:</Text>
                <Text style={{ ...contentColor, ...content }}>{ this.state.weight } kg</Text>
              </View>
              <View style={ wrapperContent }>                
                <Text style={ contentColor }>Height:</Text>
                <Text style={{ ...contentColor, ...content }}>{ this.state.height } cm</Text>
              </View>
              <View style={ wrapperContent }>
                <Text style={ contentColor }>Body Mass Index:</Text>
                <Text style={{ ...contentColor, ...content }}>{ this.state.hasil.imt }</Text>
              </View>
              <View style={ wrapperContent }>
                <Text style={ contentColor }>Diagnosa:</Text>
                <Text style={{ ...contentColor, ...content }}>{ this.state.hasil.ket }</Text>
              </View>
            </View>
          : null
        }
      </View>
    );
  }
}

let wrapperContent = {
  padding: 10, 
  alignItems: 'center'
}

let contentColor = {
  color: 'black'
}

let content = {
  fontSize: 20,
  fontWeight: 'bold'
}