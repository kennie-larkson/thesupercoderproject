const express = require("express")
const port = process.env.PORT || 3000
const bodyparser = require("body-parser")

const app = express()

let postData 
app.use(bodyparser.urlencoded({extended: true}))

app.get("/",(req,res)=>{
    res.send('{status: success}')
       
})

app.post("/data",(req,res)=>{

    postData = {
        "data": req.body.data
    }

    res.send(postData)
    
})

app.get("/data",(req,res)=>{
    res.sendFile( __dirname+'/index.html')
   
    
})

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)

    
})