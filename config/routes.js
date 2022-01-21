const express = require('express')
const routes = express.Router()

let db = [
    { '1': { Nome: 'Robert Peterson', Idade: '20' } },
    { '2': { Nome: 'Deni Devito', Idade: '67' } },
    { '3': { Nome: 'Morgan Grey ', Idade: '45' } },
    { '4': { Nome: 'Bia Bilac', Idade: '34' } },
    { '5': { Nome: 'Tony macklogsonh', Idade: '35' } },

]


//Métodos HTTP
//GET para buscar dados na API
routes.get('/', (req,res)=>{
  return res.json(db)
})

//POST para adicionar dados
routes.post('/addUser', (req,res)=>{
    const  body =req.body

    if(!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)
})

//DELETE , apagar dados
routes.delete('/:id', (req,res)=>{
    const id =req.params.id

    let newDB =db.filter(item => {
    if(!item[id])
       return item
       
    })
    console.log('Item deletado com sucesso ˜')
    db= newDB
    return res.send(newDB)
})

ß

module.exports = routes