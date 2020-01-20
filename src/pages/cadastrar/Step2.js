import React, {Component} from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import styles from '~/styles'
import FormParent from '~/components/FormParent';
import InputForm from '~/components/InputForm';
import { Btn2 } from '~/components/Buttons';
import api from '~/services/api';


export default class step2 extends Component {
    
    static navigationOptions = {
        header: null,
    };

    cadastrar = async () => {

        if(this.state.telefone && this.state.senha && 
            this.state.confirmSenha && this.equalPass()){
            this.setState({load:true});
            let nome = this.props.navigation.getParam('nome');
            let sobrenome = this.props.navigation.getParam('sobrenome');
            let data = await api.cadastrar(this.state.telefone,this.state.senha,nome,sobrenome);
            if(data.confirm){
                this.props.navigation.navigate('ConfirmCode',{user: data.user});
            }else{
                alert('Esse telefone já foi cadastrado ou algo está errado em seu formulário!');
            }
            this.setState({load:false});
        }else{
            alert('Algo está faltando ou incorreto em seu formulário.');
        }
    }

    equalPass = () => {
        return (this.state.senha === this.state.confirmSenha)
    }

    state = {
        padding: 75,
        telefone: '',
        senha: '',
        confirmSenha: ''
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
                <InputForm 
                keyboardType='phone-pad' 
                title='Telefone' 
                onChangeText={(telefone) => { this.setState({telefone}); }}/>
                
                <InputForm 
                secureTextEntry
                title='Senha' 
                onChangeText={(senha) => { this.setState({senha}); }} 
                onFocus={() => {this.onFocus(0)}} onBlur={() => this.onBlur()}/>

                <InputForm 
                secureTextEntry
                title='Confirmar Senha' 
                onChangeText={(confirmSenha) => { this.setState({confirmSenha}); }}
                onFocus={() => {this.onFocus(0)}} onBlur={() => this.onBlur()}/>
                {this.equalPass() ? null : <Text>Senhas não combinam.</Text>}
                <View style={styles.cadastrar.highBtn}>
                    <Btn2 text='próximo' load={this.state.load} onPress={this.cadastrar}/>
                </View>
            </FormParent>
        );
    }

}
