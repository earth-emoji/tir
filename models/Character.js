const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please fill your name']
    },
    author: { type: Schema.Types.ObjectId, ref: 'Person', },
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story', }]
}, { timestamps: true });