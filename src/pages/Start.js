import React, {Component} from 'react';
import {
    Text, 
    Image,
    View,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import assets from '../assets';
import styles from '../styles'
import { Btn1, Btn2 } from '../components/Buttons';


export default class Start extends Component {

    static navigationOptions = {
        header: null,
    };

    render(){
        return(
            <ImageBackground 
                source={assets.bgStart}
                style={styles.start.bg}
                >
                <Image source={assets.logo} 
                    style={styles.start.logo} />

                <View style={styles.start.buttons}>
                    <Btn1 text='Cadastrar' onPress={() => this.props.navigation.navigate('Cadastrar')}/>
                    <Btn2 text='Login'     onPress={() => this.props.navigation.navigate('Login')}/>                
                </View>    
            </ImageBackground>
        );
    }

}