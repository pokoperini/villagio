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
import api from '~/services/api';



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
        senha: '',
        load: false,
        error: false,
    }

    login = async () =>{

        if(this.state.telefone && this.state.senha){
            this.setState({load:true});
            let login = await api.login(this.state.telefone,this.state.senha);
            console.log(login);
            if(login.confirm){
                // OneSignal.setExternalUserId(login.data.user);
                this.props.navigation.pop(1);
                this.props.navigation.replace({
                    routeName: 'Main'
                });
                this.setState({error:false});
            }else{
                this.setState({error:true});
            }
            this.setState({load:false});
        }else{
            this.setState({error:true});
        }
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
        let t = this.state.load ? 't' : '';
        return(
            <FormParent title='Login' onPressBack={() => this.props.navigation.goBack()} 
            styleConatiner={{
                paddingTop: this.state.padding
            }}
            >
                <InputForm keyboardType='phone-pad' title='Telefone' onChangeText={(telefone) => { this.setState({telefone}); }} />
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
                    <Btn2 text={'login'} load={this.state.load} onPress={this.login}/>
                </View>
            </FormParent>
        );
    }

}
