const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const templatePath=path.join(__dirname,'../template')
//const SingupCollection1=require("./mongodb")
const BusCardCollection = require("./carddb")
const session=require("express-session")
const validate=require("validator")




app.use(session({
    secret:"password",
    resave:false,
    saveUninitialized:true
}))

app.use('/images',express.static('images'))
app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)


app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/home",(req,res)=>{
    res.render("home")
})

/*app.get("/signup",(req,res)=>{
    res.render("signup")
})*/
app.get("/buscard",(req,res)=>{
    res.render("buscard")
})



app.get("/logout", (req, res) => {
    // Clearing session data
    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
            res.status(500).send("Error logging out");
        } else {
            res.redirect("/home");
        }
    })
})



app.use(express.urlencoded({extended:false}))

app.post("/home",(req,res)=>{
    res.render("home")
})
/*app.post("/signup",async(req,res)=>{
    console.log(req.body)
    
    try{
        const check1=SingupCollection1.findOne({username:req.body.username})
        const data ={
            name:req.body.name,
            username:req.body.username,
            password:req.body.password,
            email:req.body.email
        }
        if(data.username!=check1.username&&data.password!=check1.password)
        {
            await SingupCollection1.insertMany([data])
    
            res.render("home")
        }
        else{
            res.send("Username already exist")
        }
        
    }catch{
        res.send("Wrong details")
    }


})*/



app.post("/login", async (req, res) => {
    try {
        const user = await BusCardCollection.findOne({ mobile: req.body.mobile, password:req.body.password })
        if (user) {
            res.render("cardhome")
        } else {
            res.send("Invalid mobile number or password")
        }
    } catch (error) {
        console.error("Error during login:", error)
        res.status(500).send("An error occurred during login")
    }
})


app.post("/buscard",async(req,res)=>{
    const carduser={
        firstname:req.body.firstname,
        middlename:req.body.middlename,
        lastname:req.body.lastname,
        fullname:req.body.fullname,
        mobile:req.body.mobile,
        dob:req.body.dob,
        aadharnumber:req.body.aadharnumber,
        address:req.body.address,
        password:req.body.password,
        city:req.body.city,
        email:req.body.email
    }

    try{
        const existinguser=await BusCardCollection.findOne({username: carduser.mobile})
        const existingpassword=await BusCardCollection.findOne({password:carduser.email})
        if(existinguser||existingpassword)
        {
            res.send("Username/Password alredy exist")
        }else{
            await BusCardCollection.insertMany([carduser])
            res.render("cardhome")
        }
    }catch(error){
        console.error("Error during user addition:", error)
        res.send("Error during user addition")
    }
})


/*app.post("/buscard", async (req, res) => {
    const cardUser = {
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        fullname: req.body.fullname,
        username: req.body.username,
        password: req.body.password,
        mobile: req.body.mobile,
        birthdate: req.body.birthdate,
        aadharnumber: req.body.aadharnumber,
        addressline1: req.body.addressline1,
        addressline2: req.body.addressline2,
        city: req.body.city,
        email: req.body.email
    };

    try {
        // Validate the data before insertion
        const validationErrors = await BusCardCollection.validate(cardUser)

        if (validationErrors) {
            console.error("Validation errors:", validationErrors)
            res.status(400).send("Validation errors occurred")
            return
        }

        // Proceed with adding the user to the collection
        await BusCardCollection.insertMany([cardUser])
        res.render("cardhome")
    } catch (error) {
        console.error("Error during user addition:", error)
        res.status(500).send("Error during user addition")
    }
})*/

app.listen(3000,()=>{
    console.log("Port is connected ")
})


