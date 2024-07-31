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
app.get('/shoes', function(req,res) {
  
})

// app.get('/shoes/:max-price', function(req,res) {
//   let filteredMaxShoes = shoes.filter((shoe) => {
//     return parseInt(shoe.price) < parseInt(req.params.max-price)
//   })
//   res.render(filteredMaxShoes)
// })

// app.get('/shoes/:min-price', function(req,res) {
  //   let filteredMinShoes = shoes.filter((shoe) => {
  //     return parseInt(shoe.price) > parseInt(req.params.min-price)
  //   })
  //   res.render(filteredMinShoes)
  // })

// app.get('/shoes/:type', function(req,res) {
//   let filteredTypeShoes = shoes.filter((shoe) => {
//     return shoe.type === req.params.type
//   })
//   res.render(filteredTypeShoes)
// })

// app.get('/shoes', function(req,res) {
//   res.send(shoes)
// })
// GET localhost:3000/


// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000');
})