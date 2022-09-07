const express = require('express');
const app = express();
const path = require('path')
const faker = require('faker')

console.log(faker.company.companyName())

app.use('/src', express.static(path.join(__dirname, '/src')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))


app.get('/', (req, res, next)=>{
    try{
        res.sendFile(path.join(__dirname,'index.html'));
    }
    catch(err){
        next(err)
    }
})

const init = () =>{
    try{
      const port = process.env.PORT || 3000;
      app.listen(port, ()=>console.log(`listening on port ${port}`))  
    }
    catch(err){
        console.log(err)
    }
}

init();