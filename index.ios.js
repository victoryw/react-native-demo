/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native'



class Greeting extends Component {

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
           <View>
               <Text> Hello {this.props.name}! </Text>
               <Image source={pic} style={{width: 193, height: 110}} />
           </View>
        );
    }
}

class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeDemo', () => LotsOfGreetings);
