const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/CardSystem")
.then(()=>{
    console.log("carddb connected")
})
.catch(()=>{
    console.log("failed to connect")
})


const BusCardSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    middlename:{
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
    dob:{
        type:String,
        required:true,
        birth:Date('2004-03-23')
    },
    aadharnumber:{
        type:Number,
        required:12,
        
    },
    address:{
        type:String,
        required:true
    },
    password:{
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
/*BusCardSchema.virtual('fullname').get(function () {
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
})
*/
const BusCard=new mongoose.model("BusCardCollection",BusCardSchema)
module.exports=BusCard