const express = require("express")
const port = process.env.PORT || 3000
const bodyparser = require("body-parser")



const app = express()

let postData
app.use(bodyparser.urlencoded({extended: true}))

app.get("/",(req,res)=>{
    res.send('{status: success}')
    
})

app.get("/data",(req,res)=>{
    res.sendFile( __dirname+'/index.html')
    // console.log(req.body.name)
})

app.post("/data",(req,res)=>{
    res.sendStatus(200)
    // console.log(req.body.data)
    postData = req.body.data
    console.log(`{data: '${postData}'}`)
})

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
    
})