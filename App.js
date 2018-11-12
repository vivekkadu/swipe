import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, ImageBackground } from 'react-native';
import { Card, Button, SocialIcon } from 'react-native-elements';
import  AssemblyBoard from './src/AssemblyBoard';
import BackgroundImage from './src/BackgroundImage';

console.disableYellowBox = true;

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.containerStyle}>
        <AssemblyBoard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  }
});
