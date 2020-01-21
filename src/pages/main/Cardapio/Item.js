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
import MultiSelect from 'react-native-multiple-select';

const DATA = [{
    id: '92iijs7yta',
    name: 'Ondo',
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun',
  }, {
    id: '16hbajsabsd',
    name: 'Calabar',
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos',
  }, {
    id: '667atsas',
    name: 'Maiduguri',
  }, {
    id: 'hsyasajs',
    name: 'Anambra',
  }, {
    id: 'djsjudksjd',
    name: 'Benue',
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna',
  }, {
    id: 'suudydjsjd',
    name: 'Abuja',
  }];

export default class Cardapio extends Component {

    static navigationOptions = {
        
    }
    
    async componentDidMount(){
        let isPizza = this.props.navigation.getParam('item').isPizza;
        if(isPizza){
            let sabores = await api.getSabores();
            this.setState({sabores,isPizza});
        }
    }

    state = {
        item: this.props.navigation.getParam('item'),
        multi: [],
        isPizza: false,
        sabores: []
    }


    addItem = async () => {
        if(this.state.isPizza && this.state.multi.length === 0){
            alert('Escolha algum sabor!');
            return false;
        }
        let pedido = await AsyncStorage.getItem('pedido');
        try {
            pedido = JSON.parse(pedido)
        } catch (e) {
            pedido = [];
        }
        pedido.push({
            id: this.state.item.id,
            sabores: this.state.isPizza ? this.state.multi : null,
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
                {
                    this.state.isPizza ?
                <MultiSelect
                hideTags
                items={this.state.sabores}
                uniqueKey="id"
                onSelectedItemsChange={(multi) => {
                    if(multi.length <= this.state.item.nSabores){
                        this.setState({multi})
                    }
                }}
                selectedItems={this.state.multi}
                style={styles.cardapio.picker}
                selectText="Escolha os Sabores"
                selectedItemTextColor="#CCC"
                itemTextColor="#000"
                searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#CCC"
                submitButtonText="Confirmar"
                styleDropdownMenu={styles.cardapio.DropdownMenu}
                styleItemsContainer={styles.cardapio.pickerContainer}
                styleListContainer={styles.cardapio.pickerList}
                styleSelectorContainer={styles.cardapio.SelectorContainer}
                styleDropdownMenuSubsection={styles.cardapio.picker}
                styleTextDropdown={styles.cardapio.TextDropdown}
                styleTextDropdownSelected={styles.cardapio.TextDropdown}
                />
                :null
                }
            </View>
        );
    }

}
