import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView } from 'react-native';
import { Card, Button, SocialIcon } from 'react-native-elements';

export default class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('./img/bg.jpg')}>

                    {this.props.children}

            </Image>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});
