const mongoose = require("mongoose");
const Schema = mongoose.Schema
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "required exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "name required"
            },
            duration: {
                type: Number,
                required: "duration required"
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            }
        }
    ]
});



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout

