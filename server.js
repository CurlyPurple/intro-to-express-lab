// import modules

import express from 'express'
import { collectibles } from './data/collect-data.js'
import {shoes} from './data/shoes-data.js'

// create Express app

const app = express()

// configure the app (app.set)

app.set('view engine', 'ejs')

// mount Middleware (app.use)



// mount routes
// 1.
app.get('/greetings/:name', function(req,res) {
  res.send(`Hello there, ${req.params.name}!`)
})

// 2. 
app.get('/roll/:number', function(req,res) {
  if (!isNaN(req.params.number)) {
    let randomNum = Math.floor(Math.random() * req.params.number)
    res.send(`You rolled a ${randomNum}`)
  }
    else {
      res.send('You must specify a number')
    }
})

// 3.
app.get('/collectibles/:index', function(req,res) {
  if (req.params.index > collectibles.length - 1) {
    res.send('This item is not yet in stock. Check back soon!')
  } else {
    res.send(`So, you want the ${collectibles[req.params.index].name}? For $${collectibles[req.params.index].price}, it can be yours!`)
  }
})

//4. 
// Ben's Morning Help
app.get('/shoes', function(req,res) {
  let minPrice = req.query['min-price'] ? req.query['min-price'] : 0
  let maxPrice = req.query['max-price'] ? req.query['max-price'] : Infinity
  let type = req.query.type ? req.query.type : ''
  const filteredShoes = shoes.filter((shoe) => {
    return shoe.price >= minPrice && shoe.price <= maxPrice && shoe.type.includes(type)
  })
})

// My solution
// app.get('/shoes', function(req,res) {
//   let filteredShoes = shoes.filter((shoe) => {
//     if ((req.query['min-price']) && (req.query['max-price']) && (req.query['type'])) {
//       return ((shoe.price > req.query['min-price']) && (shoe.price < req.query['max-price']) && (shoe.type === req.query['type']))
//     } else if ((req.query['min-price']) && (req.query['max-price'])) {
//       return ((shoe.price > req.query['min-price']) && (shoe.price < req.query['max-price']))
//     } else if ((req.query['max-price']) && (req.query['type'])) {
//       return ((shoe.price < req.query['max-price']) && (shoe.type === req.query['type']))
//     } else if ((req.query['min-price']) && (req.query['type'])) {
//       return ((shoe.price > req.query['min-price']) && (shoe.type === req.query['type']))
//     } else if(req.query['min-price']) {
//       return (shoe.price > req.query['min-price'])
//     } else if (req.query['max-price']) {
//       return (shoe.price < req.query['max-price'])
//     } else if (req.query.type) {
//       return (shoe.type === req.query['type'])
//     } else {
//       return shoes
//     }
//   })
//   res.send(filteredShoes)
// })

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000');
})