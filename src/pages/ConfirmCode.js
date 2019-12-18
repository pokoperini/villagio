import React, {Component} from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import styles from '../styles'
import FormParent from '../components/FormParent';
import InputForm from '../components/InputForm';
import { Btn2 } from '../components/Buttons';


export default class ConfirmCode extends Component {
    
    static navigationOptions = {
        header: null,
    };

    state = {
        padding: 95
    }

    confirm = () => {
        
    }

    onFocus(val){
        this.setState({
            padding: val
        });
    }

    onBlur(){
        this.setState({
            padding: 95
        });
    }

    render(){
        return(
            <FormParent title='Confirmar Número' onPressBack={() => this.props.navigation.goBack()}  
            styleConatiner={{
                paddingTop: this.state.padding
            }}
            >
                <Text style={styles.InputForms.instructions}>
                    O APP enviará um SMS para verificar seu número de telefone. Insira o código abaixo:
                </Text>
                <InputForm title='Código' onChangeText={(code) => { this.setState({code}); }} 
                onFocus={() => {this.onFocus(50)}} onBlur={() => this.onBlur()} />
                <View style={styles.default.highBtn}>
                    <Btn2 text='Confirmar' onPress={this.confirm}/>
                </View>
            </FormParent>
        );
    }

}
