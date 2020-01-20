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


export default class step2 extends Component {
    
    static navigationOptions = {
        header: null,
    };

    next = () => {
        if(this.state.nome && this.state.sobrenome){
            let obj = {
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
            };
            this.props.navigation.navigate('Step2',obj);
        }else{
            alert('Algo está faltando ou incorreto em seu formulário.');
        }
    }

    state = {
        padding: 75,
        'nome': '',
        sobrenome: ''
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
            <FormParent title='Cadastrar' onPressBack={() => this.props.navigation.navigate('Start')} 
            styleConatiner={{
                paddingTop: this.state.padding
            }}
            >
                <InputForm 
                title='Nome' 
                onChangeText={(nome) => { this.setState({nome}); }}/>
                
                <InputForm 
                title='Sobrenome' 
                onChangeText={(sobrenome) => { this.setState({sobrenome}); }} 
                onFocus={() => {this.onFocus(40)}} onBlur={() => this.onBlur()}/>

                <View style={styles.cadastrar.highBtn}>
                    <Btn2 text='próximo' load={this.state.load} onPress={this.next}/>
                </View>
            </FormParent>
        );
    }

}
