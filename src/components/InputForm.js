import React, {Component} from 'react';
import {
    Text, 
    View,
    TextInput,
    Animated
} from 'react-native';
import styles from '../styles'


export default class InputForm extends Component {


    constructor(props){
        super(props);
        this.fontSize = new Animated.Value(0);
        this.textY = new Animated.Value(0);
    }

    state = {
        value: this.props.value ? this.props.value : ''
    }

    onFocus = () => {
        Animated.timing(this.textY, {
            toValue: 1,
            duration: 400,
        }).start();
        Animated.timing(this.fontSize, {
            toValue: 1,
            duration: 100,
        }).start();

        if(typeof this.props.onFocus === 'function') this.props.onFocus();
    }
    onBlur = () => {
        if(this.state.value.length === 0){
            Animated.timing(this.textY, {
                toValue: 0,
                duration: 400,
            }).start();
            Animated.timing(this.fontSize, {
                toValue: 0,
                duration: 100,
            }).start();
        }
        
        if(typeof this.props.onBlur === 'function') this.props.onBlur();
    }

    render(){
        const fontSize = this.fontSize.interpolate({
            inputRange: [0, 1],
            outputRange: [14, 11]
        });
        const textY = this.textY.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -16]
        });
        return(
            <View style={[styles.InputForms.View,this.props.style]} >
                <Animated.Text style={[styles.InputForms.title,{
                    fontSize: fontSize,
                    transform: [{translateY: textY}]
                }]}>{this.props.title}</Animated.Text>
                <TextInput 
                {...this.props}
                style={styles.InputForms.inputText} 
                onFocus={this.onFocus} 
                onBlur={this.onBlur}
                value={this.state.value}
                onChangeText={value => {
                    this.setState({value});
                    if(typeof this.props.onChangeText === 'function'){
                        this.props.onChangeText(value)
                    }
                }}
                autoCompleteType='off'
                autoCorrect={false}
                />
            </View>
        );
    }

}
