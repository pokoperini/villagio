import React, {Component} from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import assets from '../../assets';
import styles from '../../styles'


export default class Cardapio extends Component {
    
    static navigationOptions = {
        title: 'Cardápio',
        tabBarIcon: ({ tintColor }) => (<Icon name={'book-open'} size={30} color={tintColor} />)
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
