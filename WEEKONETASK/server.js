const express = require("express")
const port = process.env.PORT || 3000
const bodyparser = require("body-parser")

const app = express()

const postData = []
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.get("/",(req,res)=>{
    res.send('{status: success}')
       
})

app.post("/data",(req,res)=>{

    const data = {
        data: req.body.data
    }

    postData.push(data)

    res.send(postData.map(data=> data))
    postData.map(data=> console.log(data))
    
})

app.get("/data",(req,res)=>{
    res.sendFile( __dirname+'/index.html')
   
    
})

app.listen(port,()=>{
    console.log(`Week One Server is running on port : ${port}`)

    
})