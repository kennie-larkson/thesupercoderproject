const express = require("express")
const port = process.env.PORT || 3000
const bodyparser = require("body-parser")

const app = express()
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

const data_array = []
app.get("/user/signup",(req,res)=>{
    res.sendFile( __dirname+'/user/signup.html')
    

})

app.post("/",(req,res)=>{
    const email = req.body.email_data
    const password = req.body.password_data
    data_array.push(email,password)
    console.log(data_array)
    res.send('Data received')

})


app.listen(port,()=>{
    console.log(`Week Two Server is running on port : ${port}`)

    
})