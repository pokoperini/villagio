import React, {Component} from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import assets from '../assets';
import styles from '../styles'


export default class FormParent extends Component {

    render(){
        return(
            <ImageBackground 
                source={assets.bg}
                style={styles.default.bg}
                >
                <TouchableOpacity 
                    style={styles.formParent.buttonBack}
                    onPress={this.props.onPressBack}
                    >
                    <Icon
                    size={24}
                    name='left'
                    color='white'
                    />
                </TouchableOpacity>
                <Text style={styles.formParent.title}>{this.props.title}</Text>
                <View style={[styles.formParent.form,this.props.styleConatiner]}>
                    {this.props.children}
                </View>
            </ImageBackground>
        );
    }

}
