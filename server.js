const express = require('express');
const app = express();

app.get('/', (req, res, next)=>{
    try{
        res.send(`
            <html>
                <head>
                </head>
                <body>
                    <h1>
                        Hello World
                    </h1>
                </body>
            </html>
        `)
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