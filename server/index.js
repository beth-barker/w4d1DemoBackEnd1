
//Starting code for servers 

const express = require('express')
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 
'conditioner', 'rusty nail', 'desk']

app.get('/api/inventory', (req, res) => {
    console.log(req.query)
    const {item} = req.query
  
    if(item){
      const filteredItems = inventory.filter(element => element.toLowerCase().includes(item.toLowerCase()))
  
      res.status(200).send(filteredItems)
    } else {
      res.status(200).send(inventory)
    }
  
  })

app.listen(5050, () => console.log('Server is up and running on port 5050'))

app.get(`/api/inventory/:id`, (req, res) => {
    const {id} = req.params

    if(inventory[+id]) {
        res.status(200).send(inventory[+id])
    } else {
        res.status(400).send('That id does not exist')
    }
})