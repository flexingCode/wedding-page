import { Schema, models, model } from "mongoose";

const guestSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Guest = models.Guest || model("Guest", guestSchema);

export default Guest;