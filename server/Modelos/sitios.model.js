const mongoose= require('mongoose');

const sitioSchema= mongoose.Schema({
    location:{
        type:String,
        require:true,
    },
    id:{
        type:String,
        require:true,
        unique:true
    }
});

const Sites = mongoose.model('Sites', sitioSchema);
module.exports(Sites);