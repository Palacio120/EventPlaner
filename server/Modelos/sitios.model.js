import mongoose from 'mongoose'

const sitioSchema= mongoose.Schema({
    location:{
        type:String,
        require:true,
    },
    img:{
        type:String,
        require:true
    },
    id:{
        type:String,
        require:true,
        unique:true
    }
});

const Sites = mongoose.model('Sites', sitioSchema);
export default (Sites);