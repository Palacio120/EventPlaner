const mongoose= require('mongoose');

const eventSchema= mongoose.Schema({
    hora:{
        type: Number,
        require:true,
    },
    dia:{
        type: String,
        require:true,
    },
    titulo:{
        type:String,
        require:true,
    },
    sitio:{
        type:String,
        require:true,
    },
    id:{
        type:String,
        require:true,
        unique:true,
    }
});

const Event = mongoose.model('Event', eventSchema);
module.exports(Event);