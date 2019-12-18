/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import { View , Image , TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Login from './pages/Login';
import Start from "./pages/Start";
import Cadastrar from "./pages/Cadastrar";
import ForgotPass from "./pages/ForgotPass";
import ConfirmCode from "./pages/ConfirmCode";
import Cardapio from "./pages/main/Cardapio";
import Pedido from "./pages/main/Pedido";
import User from "./pages/main/User";


const Main = createBottomTabNavigator({
    Cardapio: Cardapio,
    Pedido: Pedido,
    User: User 
  },
  {
    initialRouteName: 'Cardapio',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#BF0413',
      inactiveTintColor: '#DADADA',
      style: {
        position: 'absolute',
        height: 70,
        paddingTop: 13,
        paddingBottom: 10,
        paddingHorizontal: 45,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        backgroundColor: '#FFF'
      },
      labelStyle:{
        fontSize: 10,
        fontFamily: 'Metropolis-SemiBold'
      },

    },
  }
);

const a = createStackNavigator({
    Start: Start,
    Login: Login,
    Cadastrar: Cadastrar,
    ForgotPass: ForgotPass,
    ConfirmCode: ConfirmCode,
    Main: Main
},  {
        initialRouteName: 'Start',
        headerMode: 'screen',
        defaultNavigationOptions: ({navigation}) =>  ({
            header: null
        })
    }  
)

const Router = createAppContainer(a);

export default class App extends Component {

  render(){
      // console.disableYellowBox = true;
      return(
          <View style={{flex: 1}}>
              <Router/>
          </View>
      )
  }
} 

