
const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    title : String,
    description : String,
    file : String,
    image : String,
    genre : String,
    createdBy : String,
    createdBy : String,
    createdAt : Date,
})

module.exports = model( 'podcastCollection', mySchema );
