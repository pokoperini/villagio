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
        baseURL: 'http://pizzavillaggio.com.br/api/',
        auth: {
            password: 'Q1w2e3r4!'
          },
    });

    async login(tel , pass){
        var res;
        await this.Axios.post('login',{
            telefone: tel,
            password: pass
        })
        .then(function(response){
            res = response.data;
        }).catch(this.catch())
        return res;
    }

    async cadastrar(tel,pass,nome,sobrenome){
        var res;
        await this.Axios.post('cadastrar',{
            telefone: tel,
            password: pass,
            nome: nome,
            sobrenome:sobrenome
        })
        .then(function(response){
            res = response.data;
        })
        return res;
    }

    async confirmCode(id,code){
        var res;
        await this.Axios.post('confirmcode',{
            id: id,
            code: code,
        })
        .then(function(response){
            res = response.data;
        }).catch(err => this.catch(err))
        return res;
    }

    async imageUp(pic,id){
        var res;
        await this.Axios.post('imageup',{
            data:pic, 
            id:id
        })
        .then(function(response){
            res = response.data;
        }).catch(err => this.catch(err))
        return res;
    }

    async enderecoUp(titulo,rua,numero,complemento,bairro,cidade,estado, id){
        var res;
        await this.Axios.post('enderecoup',{
            titulo: titulo,
            rua: rua,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            id: id
        })
        .then(function(response){
            res = response.data;
        }).catch(this.catch())
        return res;
    }

    async userUp(id,tel,nome,sobrenome){
        var res;
        await this.Axios.post('userup',{
            id: id,
            telefone: tel,
            nome: nome,
            sobrenome:sobrenome
        })
        .then(function(response){
            res = response.data;
        }).catch(err => this.catch(err))
        return res;
    }

    async passUp(id,passOld,passNew){
        var res;
        await this.Axios.post('userup',{
            id: id,
            passOld: passOld,
            passNew: passNew,
        })
        .then(function(response){
            res = response.data;
        }).catch(err => this.catch(err))
        return res;
    }

    async sendTel(tel){
        var res;
        await this.Axios.post('forgotPass',{
            telefone: tel,
        })
        .then(function(response){
            res = response.data;
        }).catch(this.catch());
        return res;
    }

    async getCardapio(){
        var cardapio;
        await this.Axios.get('cardapio')
        .then(function(response){
            cardapio = response.data;
        }).catch(err => {this.catch(err)});
        return cardapio;
    }

    async getPromocoes(){
        var promocoes;
        await this.Axios.get('promocoes')
        .then(function(response){
            promocoes = response.data;
        }).catch(err => this.catch(err));
        return promocoes;
    }

    async getCategorias(){
        var categorias;
        await this.Axios.get('categorias')
        .then(function(response){
            categorias = response.data;
        }).catch(err=> this.catch(err));
        return categorias;
    }

    async getStatusPedido(id){
        var status;
        await this.Axios.get('status/'+id)
        .then(function(response){
            status = response.data;
        }).catch(err => this.catch(err));
        return status;
    }

    catch(err = null){
        alert('Falha no envio, tente novamente!');
        if(err) console.log(err);
    }

}

export default Api = new Api;




