const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const storySchema = new Schema({
    title: String,
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    characters: [{
        character: { type: Schema.Types.ObjectId, ref: 'Character' },
        role: {
            type: String,
            enum: [
                'Protagonist',
                'Deuteragonist',
                'Antagonist',
                'Love Interest',
                'Mentor',
                'Narrator',
                'Secondary Character',
                'Tertiary Character',
                'Flat Character'
            ]
        },
    }]
}, { timestamps: true });