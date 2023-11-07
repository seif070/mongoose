const mongoose = require('mongoose')

const connectdb =async()=>{
    try {
        await mongoose.connect('mongodb+srv://seif070:Bmwbmw151718@atlascluster.dpqjgmx.mongodb.net/?retryWrites=true&w=majority')
        console.log('you did it ur connected to db')

    }catch(err){
        console.log(err)
    }

}

module.exports=connectdb