import React, {Component} from 'react';
import {
    Text, 
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    SectionList,
    RefreshControl
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import assets from '../../../assets';
import styles from '../../../styles'
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';


export default class Cardapio extends Component {

    static navigationOptions = {
        
    }
    
    state = {
        item: this.props.navigation.getParam('item'),
    }


    addItem = async () => {
        let pedido = await AsyncStorage.getItem('pedido');
        try {
            pedido = JSON.parse(pedido)
        } catch (e) {
            pedido = [];
        }
        pedido.push({
            id: this.state.item.id,
            // sabores: ,
            // quantidade:
        });
        console.log(pedido);
        await AsyncStorage.setItem('pedido',JSON.stringify(pedido));
        this.props.navigation.goBack();
    }

    render(){

        return(
            <View 
            style={[styles.default.bg,{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}]}
            >
            <TouchableOpacity style={{
                backgroundColor: 'black',
                height: 50,
                width: 100
            }}
            onPress={this.addItem}
            >
                <Text style={{color: 'white'}}>{this.state.item.titulo}</Text>
            </TouchableOpacity>
                
            </View>
        );
    }

}
