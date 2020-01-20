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
import ImagePicker from 'react-native-image-picker'
import { Btn2 } from '~/components/Buttons';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';


export default class step4 extends Component {
    
    static navigationOptions = {
        header: null,
    };

    upload = async () => {

        if(this.state.picture){
            this.setState({load:true});
            let user = this.props.navigation.getParam('user');
            let data = await api.imageUp(this.state.picture.data,user.id);
            if(data.confirm){
                user.thumbnail = data.name;
                await AsyncStorage.setItem('user',JSON.stringify(user))
                this.props.navigation.navigate('Step5',{user: user});
            }else{
                alert('Tente Novamente!');
            }
            this.setState({load:false});
        }else{
            alert('Insira uma imagem!');
        }
    }

    skip = () => {
        let user = this.props.navigation.getParam('user');
        this.props.navigation.navigate('Step5',{user: user});
    }

    chosePic = () => {
        const options = {
          noData: false,
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ picture: response})
            }
        })
      }

    state = {
        picture: '',
        load:  ''
    }

    render(){
        return(
            <FormParent title='Escolha uma foto' onPressBack={() => this.props.navigation.goBack()}
            styleConatiner={{
                paddingTop: 20
            }}
            >
                <View style={styles.cadastrar.pic}>
                    <Btn2 text='Escolher Imagem' onPress={this.chosePic}/>
                    {this.state.picture ?
                    <Image
                        source={{ uri: this.state.picture.uri }}
                        style={{ width: 200, height: 200 }}
                    />
                    :null
                    }
                </View>
                <View style={styles.cadastrar.highBtn}>
                    <Btn2 text='próximo' load={this.state.load} onPress={this.upload}/>
                    <Btn2 text='Pular'  onPress={this.skip}/>
                </View>
            </FormParent>
        );
    }

}
