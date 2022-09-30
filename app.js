const express = require('express')

const app = express()


app.use(express.static('public'))

app.set('view engine', 'ejs') 


app.get("/Home", (req,res) => {
    res.render('Home')
})

app.get("/About", (req,res) => {
    res.render('About')
})

app.get("/Products", (req,res) => {
    res.render('Products')
})

app.get("/New-Address", (req,res) => {
    res.render('Add a New Address')
})

app.get("/Change-Address", (req,res) => {
    res.render('Change Address')
})

app.get("/Chasing", (req,res) => {
    res.render('Chasing')
})

app.get("/Edit-Profile", (req,res) => {
    res.render('Edit User Profile')
})

app.get("/Log-In", (req,res) => {
    res.render('Log In')
})

app.get("/Search", (req,res) => {
    res.render('Search')
})

app.get("/Shipping", (req,res) => {
    res.render('Shipping and Billing')
})

app.get("/Shopping-Cart", (req,res) => {
    res.render('Shopping Cart')
})

app.get("/Sign-Up", (req,res) => {
    res.render('Sign Up')
})

app.get("/User-Profile", (req,res) => {
    res.render('User Profile')
})
``

app.use((req,res) => {
    res.status(404).render('error404.ejs')
})


app.listen(3000, () => {
    console.log("server is listening at port 3000...")
})