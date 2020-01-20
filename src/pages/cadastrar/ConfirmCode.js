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
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';


export default class ConfirmCode extends Component {
    
    static navigationOptions = {
        header: null,
    };

    state = {
        padding: 95,
        code: '',
        load:false
    }

    confirm = async () => {

        if(this.state.code ){
            this.setState({load:true});
            let user = this.props.navigation.getParam('user');
            let data = await api.confirmCode(user.id,this.state.code);
            if(data.confirm){
                await AsyncStorage.setItem('user',JSON.stringify(user));
                this.props.navigation.navigate('Step4',{user: user});
            }else{
                alert('O código está incorreto');
            }
            this.setState({load:false});
        }else{
            alert('Algo está faltando.');
        }
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
                <View style={styles.cadastrar.highBtn}>
                    <Btn2 text='Confirmar' load={this.state.load} onPress={this.confirm}/>
                </View>
            </FormParent>
        );
    }

}
