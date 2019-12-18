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


export default class Cadastrar extends Component {
    
    static navigationOptions = {
        header: null,
    };

    cadastrar = () => {
        this.props.navigation.navigate('ConfirmCode');
    }

    state = {
        padding: 75,
        nome: '',
        telefone: '',
        senha: ''
    }

    onFocus(val){
        this.setState({
            padding: val
        });
    }

    onBlur(){
        this.setState({
            padding: 75
        });
    }

    render(){
        return(
            <FormParent title='Cadastrar' onPressBack={() => this.props.navigation.goBack()} 
            styleConatiner={{
                paddingTop: this.state.padding
            }}
            >
                <InputForm title='Nome' onChangeText={(nome) => { this.setState({nome}); }}/>
                <InputForm title='Telefone' onChangeText={(telefone) => { this.setState({telefone}); }} 
                onFocus={() => {this.onFocus(0)}} onBlur={() => this.onBlur()}/>
                <InputForm title='Senha' 
                secureTextEntry
                onChangeText={(senha) => { this.setState({senha}); }}
                onFocus={() => {this.onFocus(0)}} onBlur={() => this.onBlur()}/>
                <View style={styles.default.highBtn}>
                    <Btn2 text='cadastrar' onPress={this.cadastrar}/>
                </View>
            </FormParent>
        );
    }

}
