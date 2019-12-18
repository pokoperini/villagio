import React, {Component} from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import assets from '../../assets';
import styles from '../../styles'


export default class Pedido extends Component {
    
    static navigationOptions = {
        title: 'Pedido',
        tabBarIcon: ({ tintColor }) => (<Icon name={'shopping-bag'} size={30} color={tintColor} />)
    };

    state = {
    }


    render(){
        return(
            <ImageBackground 
            source={assets.bg}
            style={styles.default.bg}
            >

                
            </ImageBackground>
        );
    }

}
