import React, {Component} from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator,
    ScrollView
} from 'react-native';
import styles from '~/styles'
import FormParent from '~/components/FormParent';
import ImagePicker from 'react-native-image-picker'
import { Btn2 } from '~/components/Buttons';
import api from '~/services/api';
import InputForm from '~/components/InputForm';


export default class step5 extends Component {
    
    static navigationOptions = {
        header: null,
    };

    upload = async () => {

        if(this.state.titulo && this.state.rua && this.state.numero &&
            this.state.bairro && this.state.cidade && this.state.estado){

            this.setState({load:true});
            let user = this.props.navigation.getParam('user');
            let data = await api.enderecoUp(
                this.state.titulo,
                this.state.rua,
                this.state.numero,
                this.state.complemento ? this.state.complemento : '',
                this.state.bairro,
                this.state.cidade,
                this.state.estado,
                user.id);
                
            if(data.confirm){
                this.props.navigation.pop(1);
                this.props.navigation.replace({
                    routeName: 'Main'
                });
            }else{
                alert('Algo deu errado, Tente Novamente!');
            }
            this.setState({load:false});
        }else{
            alert('Algo está faltando ou incorreto em seu formulário.');
        }
    }

    skip = () => {
        // this.props.navigation.pop(1);
        // this.props.navigation.replace({
        //     routeName: 'Main'
        // });
        this.props.navigation.navigate('Main');
    }

    state = {
        titulo:'',
        rua:'',
        numero:'',
        complemento:'',
        bairro:'',
        cidade:'',
        estado:'',
        load:  ''
    }

    render(){
        return(
            <FormParent title='Adicione um Endereço' onPressBack={() => this.props.navigation.goBack()}
            styleConatiner={{
                paddingTop: 20
            }}
            >
                <View style={styles.cadastrar.scrollView}><ScrollView contentContainerStyle={[styles.cadastrar.scroll]} >
                    <InputForm title='Titulo' onChangeText={(titulo) => { this.setState({titulo}); }} />
                    <InputForm title='Rua' onChangeText={(rua) => { this.setState({rua}); }} />
                    <InputForm keyboardType='phone-pad' title='Número' onChangeText={(numero) => { this.setState({numero}); }} />
                    <InputForm title='Complemento' onChangeText={(complemento) => { this.setState({complemento}); }} />
                    <InputForm title='Bairro' onChangeText={(bairro) => { this.setState({bairro}); }} />
                    <InputForm title='Cidade' onChangeText={(cidade) => { this.setState({cidade}); }} />
                    <InputForm title='Estado' onChangeText={(estado) => { this.setState({estado}); }} />
                </ScrollView></View>
                
                <View style={styles.cadastrar.highBtn}>
                    <Btn2 text='próximo' load={this.state.load} onPress={this.upload}/>
                    <Btn2 text='Pular'  onPress={this.skip}/>
                </View>
            </FormParent>
        );
    }

}
