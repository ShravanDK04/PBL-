/*const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Bus_System")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect")
})


const SignupSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    username:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    }
})

/*const BusCardSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    Middlename:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        default:10
    },
    birthdate:{
        type:String,
        required:true,
        birth:Date('2004-03-23')
    },
    aadhar:{
        type:Number,
        required:true,
        default:12
    },
    address1:{
        type:String,
        required:true
    },
    address2:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    
})
BusCardSchema.virtual('fullname').get(function () {
    return `${this.firstname} ${this.middlename} ${this.lastname}`
})
SignupSchema.pre('save', function(next) {
    const signupDoc = this
    
    if (signupDoc.email) {
        BusCard.findOne({ email: signupDoc.email })
            .then(busCardDoc => {
                if (busCardDoc) {
                    
                    busCardDoc.email = signupDoc.email;
                    return busCardDoc.save()
                } else {
                    
                    const busCard = new BusCard({
                        firstname: 'Default Firstname', 
                        middlename: 'Default Middlename',
                        lastname: 'Default Lastname',
                        address1: 'Default Address 1',
                        address2: 'Default Address 2',
                        email: signupDoc.email
                    })
                    return busCard.save()
                }
            })
            .then(() => next())
            .catch(err => next(err));
    } else {
        next(new Error('Email field missing in Signup document.'))
    }
})*/


//const Signup= new mongoose.model("SignupCollection1",SignupSchema)
//const BusCard=new mongoose.model("BusCardCollection",BusCardSchema)
//module.exports=Signup
//module.exports=BusCard


