import axios from 'axios';

/**
 * 
 * Todas funções dessa classe devem ser chamadas em promisses async
 * async () => {
 *     await Api.metodo();
 * }
 * 
 * //////////////////////////////////////////////////////////////////
 * 
 * @Class Api
 * 
 * Chama funções de requisição http, para dados e afins.
 * 
 */

class Api {

    Axios = axios.create({
        baseURL: 'http://agencialazo.com.br/villagio/api/',
    });

    login(tel , pass){
        this.Axios.post('login',{
            'telefone': tel,
            'password': pass
        })
        .then(function(response){
            res = JSON.parse(response);
        })
        return res;
    }

    getCardapio(){
        var cardapio;
        this.Axios.get('cardapio')
        .then(function(response){
            cardapio = JSON.parse(response);
        });
        return cardapio;
    }

    getPromocoes(){
        var promocoes;
        this.Axios.get('promocoes')
        .then(function(response){
            promocoes = JSON.parse(response);
        });
        return promocoes;
    }

    getStatusPedido(id){
        var status;
        this.Axios.get('status/'+id)
        .then(function(response){
            status = JSON.parse(response);
        });
        return status;
    }

}

export default Api = new Api;




