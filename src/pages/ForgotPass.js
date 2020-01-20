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
import api from '~/services/api';


export default class ForgotPass extends Component {
    
    static navigationOptions = {
        header: null,
    };

    
    state = {
        padding: 95,
        telefone: '',
        load: false
    }

    send = async () => {
        if(this.state.telefone){
            this.setState({load:true});
            let res = await api.sendTel(this.state.telefone);
            if(res.confirm){
                alert('Número enviado, se esse número estiver cadastrado mandaremos um link para a troca de senha.');
            }
        }
        this.setState({load:false});
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
            <FormParent title='Esqueci a senha' onPressBack={() => this.props.navigation.goBack()} 
            styleConatiner={{
                paddingTop: this.state.padding
            }}
            >
                <Text style={styles.InputForms.instructions}>
                    Por favor, preencha com seu número de telefone. Nós mandaremos um link para trocar sua senha.
                </Text>
                <InputForm title='Telefone'  
                onFocus={() => {this.onFocus(50)}} 
                onBlur={() => this.onBlur()}
                onChangeText={(telefone) => { this.setState({telefone}); }}/>
                <View style={styles.default.highBtn}>
                    <Btn2 load={this.state.load} text='Enviar' onPress={this.send}/>
                </View>
            </FormParent>
        );
    }

}
