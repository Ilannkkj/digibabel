const express = require('express');

const router = express.Router();

const db = require('../db');


router.post('/cadastrarUsuario/', (req, res) => {
    const {nomeCadastro, emailCadastro, senhaCadastro, tipoPerfil} = req.body;

    db.query("INSERT INTO usuario (nome, email, senha, perfil) VALUES (?, ?, ?, ?)", [nomeCadastro, emailCadastro, senhaCadastro, tipoPerfil],
        (err, result) => {
            if(err) return res.status(500).send(err);
            res.status(201).json({id: result.insertId, nomeCadastro, emailCadastro, senhaCadastro, tipoPerfil});
        }
    );
})

router.get('/loginUsuario/', (req, res) => {

});

router.get('/cadastrolivro/', (req, res) => {

});

router.put('/atualizalivro/', (req, res) => {

});

router.get('/removeLivro/', (req, res) => {

});

router.put('/devolucao/', (req, res) => {

});




module.exports = router;