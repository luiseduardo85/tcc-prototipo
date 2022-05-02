const express = require('express');
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')


router.get('/add', (req,res) =>{
    res.sendFile(`${basePath}/index.html`)
})

router.post('/save', (req,res) => {
    console.log(req.body)

    const name = req.body.name

    console.log(`O nome do arquivo é ${name}`)

    res.sendFile(`${basePath}/index.html`)
})

router.get('/:id', (req,res) => {
    const id = req.params.id

    // resgatar usuario do banco de dados
    res.sendFile(`${basePath}/aluno.html`);
})

module.exports = router