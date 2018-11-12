import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, Animated, PanResponder } from 'react-native';
import { Card, Button, SocialIcon } from 'react-native-elements';

console.disableYellowBox = true;

 const width =  Dimensions.get('window').width;
 const height =  Dimensions.get('window').height;


export default class ToolsImages extends React.Component {

  componentWillMount() {
    this._animatedValue = new Animated.ValueXY()
    this._value = {x: 0, y: 0}

    this._animatedValue.addListener((value) => this._value = value);
	  this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true, //Tell iOS that we are allowing the movement
      onMoveShouldSetPanResponderCapture: () => true, // Same here, tell iOS that we allow dragging
      onPanResponderGrant: (e, gestureState) => {
        this._animatedValue.setOffset({x: this._value.x, y: this._value.y});
		this._animatedValue.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([
        null, { dx: this._animatedValue.x, dy: this._animatedValue.y}
      ]),
      onPanResponderRelease: () => {
        this._animatedValue.flattenOffset(); // Flatten the offset so it resets the default positioning
      }
    });
  }


  render() {
    return (
      <Animated.View style={[styles.containerStyle, {transform: this._animatedValue.getTranslateTransform()}]} {...this._panResponder.panHandlers} >


         <Image style={{ height: 70 , width: 70, marginTop: 20, padding: 5 }}source={this.props.source} />


      </Animated.View>

    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
  
  },
  backgroundImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    position: 'absolute'
    //resizeMode: 'stretch', // or 'stretch'
  }
});
