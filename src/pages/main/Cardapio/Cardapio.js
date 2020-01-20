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
import assets from '../../../assets';
import styles from '../../../styles'
import api from '~/services/api';

export default class Cardapio extends Component {

    
    async componentDidMount(){
        let cardapio = await api.getCardapio();
        let categorias = await api.getCategorias();
        var data = [];

        for (const k in categorias) {
            let item = categorias[k];
            let obj = {
                id: item.id,
                title: item.titulo,
                data: cardapio[item.id]
            };
            data.push(obj);
        }
        console.log(data);
        this.setState({cardapio,categorias,data});
    }
    
    state = {
        cardapio: null,
        categorias: null,
        data: [],
        refreshing: false
    }

    onRefresh = async () => {
        let cardapio = await api.getCardapio();
        let categorias = await api.getCategorias();
        var data = [];

        for (const k in categorias) {
            let item = categorias[k];
            let obj = {
                id: item.id,
                title: item.titulo,
                data: cardapio[item.id]
            };
            data.push(obj);
        }
        console.log(data);
        this.setState({cardapio,categorias,data});
    }


    render(){

        netArr=[{id:'1',titulo:'Conecte a Internet!'}];

        return(
            <ImageBackground 
            source={assets.bg}
            style={styles.default.bg}
            >{
                <SectionList
                refreshControl={
                    <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    />
                }
                sections={this.state.data ? this.state.data : netArr}
                // sections={this.state.data }
                // contentContainerStyle={}
                renderItem={({item}) => {
                    return(
                    <TouchableOpacity style={{
                        backgroundColor: 'white',
                        height: 50,
                        marginVertical: 20
                    }}
                    onPress={()=>{
                        this.props.navigation.navigate('Item',{item:item})
                    }}
                    >
                        <Text>{item.titulo}</Text>
                    </TouchableOpacity>
                )}}
                renderSectionHeader={({section})=>{
                    return(
                        <View>
                            <Text>{section.title}</Text>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
                extraData={this.state.data ? this.state.data : netArr}
                />
            }
            </ImageBackground>
        );
    }

}
