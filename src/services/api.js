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
        auth: {
            password: 'Q1w2e3r4!'
          },
    });

    async login(tel , pass){
        await this.Axios.post('login',{
            'telefone': tel,
            'password': pass
        })
        .then(function(response){
            res = response.data;
        })
        return res;
    }

    async getCardapio(){
        var cardapio;
        await this.Axios.get('cardapio')
        .then(function(response){
            cardapio = response.data;
        });
        return cardapio;
    }

    async getPromocoes(){
        var promocoes;
        await this.Axios.get('promocoes')
        .then(function(response){
            promocoes = response.data;
        });
        return promocoes;
    }

    async getCategorias(){
        var categorias;
        await this.Axios.get('categorias')
        .then(function(response){
            categorias = response.data;
        });
        return categorias;
    }

    async getStatusPedido(id){
        var status;
        await this.Axios.get('status/'+id)
        .then(function(response){
            status = response.data;
        });
        return status;
    }

}

export default Api = new Api;




