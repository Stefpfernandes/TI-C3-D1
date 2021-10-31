const express = require('express');
const cors = require('cors');
const {sequelize} = require('./models');

// . (mesmo nível), .. (nível a cima)

const models = require('./models'); 

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let itempedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;
let compra = models.Compra;
let itemcompra = models.ItemCompra;
let produto = models.Produto;

// GET - Exibir algo na TELA
app.get('/', function(rec, res){
    res.send('Olá Mundo, desafio número 3 da TI Academy');
})

//Servicos

app.post('/servicos', async(req, res) =>{
    await servico.create(
        req.body         
    ).then(function(){
        return res.json({
            error: false,
            message: "Serviço criado com sucesso!"
        })
        // catch (quando acontece um erro)
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível estabelecer conexão"
        })
    });   

//Clientes    

app.post('/clientes', async(req, res) =>{
    await cliente.create(
        req.body         
    ).then(function(){
        return res.json({
            error: false,
            message: "Cliente criado com sucesso!"
        })
        // catch (quando acontece um erro)
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível estabelecer conexão"
            })
        });   
    });
});

//Pedidos

app.post('/pedidos', async(req, res) =>{
    await pedido.create(
        req.body         
    ).then(function(){
        return res.json({
            error: false,
            message: "Pedido criado com sucesso!"
        })
        // catch (quando acontece um erro)
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível estabelecer conexão"
        })
    });   
});

//Itens Pedido

app.post('/itenspedido', async(req, res) =>{
    await itempedido.create(
        req.body         
    ).then(function(){
        return res.json({
            error: false,
            message: "Item criado com sucesso!"
        })
        // catch (quando acontece um erro)
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível estabelecer conexão"
        })
    });   
});

//Clientes

app.get('/clientes', function(rec, res){
    res.send('Você conseguiu acessar aqui!');
})

app.get('/listaservicos', async(req, res) =>{
    await servico.findAll({
        //raw: true       Decrescente = DESC  ---  Crescente = ASC
        order: [['nome', 'ASC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

//Compras

app.post('/compras', async(req, res) =>{
    await compra.create(
        req.body         
    ).then(function(){
        return res.json({
            error: false,
            message: "Item criado com sucesso!"
        })
        // catch (quando acontece um erro)
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível estabelecer conexão"
        })
    });   
});

//Itens Compra

app.post('/itenscompra', async(req, res) =>{
    await itemcompra.create(
        req.body         
    ).then(function(){
        return res.json({
            error: false,
            message: "Item criado com sucesso!"
        })
        // catch (quando acontece um erro)
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível estabelecer conexão"
        })
    });   
});

//Produtos

app.post('/produtos', async(req, res) =>{
    await produto.create(
        req.body         
    ).then(function(){
        return res.json({
            error: false,
            message: "Item criado com sucesso!"
        })
        // catch (quando acontece um erro)
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível estabelecer conexão"
        })
    });   
});

app.get('/ofertaservicos', async(req, res) => {
    await servico.count('id').then(function(servicos){
        res.json({servico});
    }); 
});

app.get('/servico/:id', async(req, res) => {
    await servico.findByPk(req.params.id)
    .then(serv =>{
        return res.json({
            error: false,
            serv
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível estabelecer conexão"
        });
    });
});

// Porta de acesso             BACK    FRONT (3000)
let port = process.env.PORT || 3001;

app.listen(port,(req, resp)=>{
    console.log('Servidor ativo: http://localhost:3001')
})