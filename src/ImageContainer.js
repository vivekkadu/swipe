import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, Animated, PanResponder } from 'react-native';
import { Card, Button, SocialIcon } from 'react-native-elements';

console.disableYellowBox = true;

 const width =  Dimensions.get('window').width;
 const height =  Dimensions.get('window').height;


export default class ImageContainer extends React.Component {


  render() {
    return (
      <View style={styles.containerStyle}>
         <Image style={{  height: 100 , width: 100, margin: 10, padding: 5,  margin: 10 }} source={this.props.source} />
         <Text style={{ color: 'white' }}>{this.props.Label}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 10,
    backgroundColor: '#1F5152',
    width: width/3.2,
    marginLeft: 5,
    height: height/4,
    marginLeft: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    position: 'absolute'
    //resizeMode: 'stretch', // or 'stretch'
  }
});
