const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scSchema = new Schema({
    story: { type: Schema.Types.ObjectId, ref: 'Story' },
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
    }
})