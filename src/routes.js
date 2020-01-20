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
import Icon from 'react-native-vector-icons/SimpleLineIcons'



import Login from './pages/Login';
import Start from "./pages/Start";
import ForgotPass from "./pages/ForgotPass";

import Step1 from "./pages/cadastrar/Step1";
import Step2 from "./pages/cadastrar/Step2";
import ConfirmCode from "./pages/cadastrar/ConfirmCode";
import step4 from "./pages/cadastrar/Step4";
import step5 from "./pages/cadastrar/Step5";

import Cardapio from "./pages/main/Cardapio/Cardapio";
import Item from "./pages/main/Cardapio/Item";
import Pedido from "./pages/main/Pedido";
import User from "./pages/main/User";


const CardapioNav = createStackNavigator({
    Lista: Cardapio,
    Item: Item,
}, {
  initialRouteName: 'Lista',
  headerMode: 'screen',
  navigationOptions: {
    title: 'Cardápio',
    tabBarIcon: ({ tintColor }) => (<Icon name={'book-open'} size={30} color={tintColor} />)
  },
  defaultNavigationOptions: ({navigation}) =>  ({
      header: null
  })
})


const Main = createBottomTabNavigator({
    Cardapio: CardapioNav,
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

const Cadastrar = createStackNavigator({
  Step1: Step1,
  Step2: Step2,
  ConfirmCode: ConfirmCode,
  Step4: step4,
  Step5: step5,
},  {
      initialRouteName: 'Step5',
      headerMode: 'screen',
      defaultNavigationOptions: ({navigation}) =>  ({
          header: null
      })
  }  
)

const a = createStackNavigator({
    Start: Start,
    Login: Login,
    Cadastrar: Cadastrar,
    ForgotPass: ForgotPass,
    ConfirmCode: ConfirmCode,
    Main: Main
},  {
        initialRouteName: 'Main',
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

