import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView, Animated, PanResponder, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableOpacity   } from 'react-native';
import { Card, Button, SocialIcon } from 'react-native-elements';
import ToolsImages from './ToolsImages';
import Draggable from 'react-native-draggable';
import ImageContainer  from './ImageContainer';
import Svg,{
 Line
} from 'react-native-svg';
import Canvas from 'react-native-canvas';




console.disableYellowBox = true;

const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;


export default class AssemblyBoard extends React.Component {

 state = { renderLaser: false , renderMotor: false, renderDisplay: false, color: 'red' };

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

renderLaser() {
  if(this.state.renderLaser){
    return(
      <ToolsImages source={require('./img/laser.png')} />
    )
  }
}
renderMotor() {
  if(this.state.renderMotor){
    return(
      <ToolsImages source={require('./img/motor.png')} />

    )
  }
}

renderDisplay() {
  if(this.state.renderDisplay){
    return(
      <ToolsImages source={require('./img/7.jpg')} />

    )
  }
}


handleCanvas = (canvas) => {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = this.state.color;
  ctx.fillRect(75, 20, 2, 80);

  ctx.fillStyle = this.state.color;
  ctx.fillRect(225, 20, 2, 80);

    // ctx.fillStyle = 'purple';
    // ctx.fillRect(75, 100, 2, 80);


}



  render() {
    return (
      <View style={{  flex:1 ,backgroundColor: 'black', alignItems: 'center'}}>

         <View style={styles.containerStyle}>
         <TouchableOpacity onPress={() => this.setState({ renderLaser: true })}>
           <ImageContainer source={require('./img/lasernew.png')} Label="LASER" />
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.setState({ renderMotor: true })}>
           <ImageContainer source={require('./img/motornew.png')} Label="MOTOR" />
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.setState({ renderDisplay: true })}>
           <ImageContainer source={require('./img/7new.png')} Label="7 SEGMENT" />
        </TouchableOpacity>


         </View>

         <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 40 }}>
         {this.renderLaser()}
         {this.renderMotor()}
         {this.renderDisplay()}
         </View>

         <Image source={require('./img/7.jpg')} style={styles.ImageStyle}/>

      <Canvas style={{ position: 'absolute', marginTop: height/2.2 }} ref={this.handleCanvas}/>

         
      </View>

    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'white',
    // height: height/3.5
  },
  backgroundImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    position: 'absolute'
    //resizeMode: 'stretch', // or 'stretch'
  },
  ImageStyle: {
    height: 150,
    width: 150,
    flexDirection: 'column',
    marginTop: height/4.5,
  }
});


//
// <ToolsImages source={require('./img/motor.png')}  Label="MOTOR"/>
// <ToolsImages source={require('./img/7.jpg')}  Label="7SEGMENT"/>
