const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please fill your name']
    },
    followers: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
    characters: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});