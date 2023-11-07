const  mongoose =require('mongoose')

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        require:true

    },
    LastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true

    },
    phone:{
    type:Number,
    require:true
   },

   note:{type:String},
   typeuser:{
    type:String,
    default:"client"
   }
})

module.exports=mongoose.model('FlcontactList',contactSchema)