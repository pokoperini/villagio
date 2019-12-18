import React, {Component} from 'react';
import {
    Text, 
    View,
    TextInput,
    Image,
    TouchableOpacity,
    ImageBackground,
    Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../styles'
import FormParent from '../components/FormParent';
import InputForm from '../components/InputForm';
import { Btn2 } from '../components/Buttons';


export default class Login extends Component {
    
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
    }

    state = {
        padding: 75,
        telefone: '',
        senha: ''
    }

    login = () =>{
        // console.log('telefone: ',this.state.telefone);
        // console.log('senha: ',this.state.senha);
        this.props.navigation.navigate('Main')
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
            <FormParent title='Login' onPressBack={() => this.props.navigation.goBack()} 
            styleConatiner={{
                paddingTop: this.state.padding
            }}
            >
                <InputForm title='Telefone' onChangeText={(telefone) => { this.setState({telefone}); }} />
                <InputForm title='Senha' onChangeText={(senha) => { this.setState({senha}); }}
                secureTextEntry
                onFocus={() => {this.onFocus(40)}} onBlur={() => this.onBlur()} />
                <TouchableOpacity style={styles.login.forgot}
                onPress={() => this.props.navigation.navigate('ForgotPass')}>
                    <View style={styles.login.forgotView}>
                        <Text style={styles.login.forgotText}>Esqueceu a senha?</Text>
                        <Icon
                        name='long-arrow-right'
                        size={20}
                        color={'#FFF'}
                        />
                    </View>
                </TouchableOpacity>

                <View style={styles.default.highBtn}>
                    <Btn2 text='login' onPress={this.login}/>
                </View>
            </FormParent>
        );
    }

}
