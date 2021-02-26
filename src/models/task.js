const { Mongoose } = require('mongoose');

const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchame = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    stars: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    amenities: { type: Array, required: true }

});
module.exports = mongoose.model('Task', TaskSchame);