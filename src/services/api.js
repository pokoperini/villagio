import axios from 'axios';


class Api {

    Axios = axios.create({
        baseURL: '',
    });

    getCardapio(){
        var cardapio;
        this.Axios.get('api/cardapio')
        .then(function(response){
            cardapio = JSON.parse(response);
        });
        return cardapio;
    }

    getPromocoes(){
        var promocoes;
        this.Axios.get('api/promocoes')
        .then(function(response){
            promocoes = JSON.parse(response);
        });
        return promocoes;
    }

    getDetails(id){
        var details;
        this.Axios.get('api/details/'+id)
        .then(function(response){
            details = JSON.parse(response);
        });
        return details;
    }

    getStatusPedido(id){
        var status;
        this.Axios.get('api/status/'+id)
        .then(function(response){
            status = JSON.parse(response);
        });
        return status;
    }

}

export default Api = new Api;




