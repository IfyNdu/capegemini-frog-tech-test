import * as FrogTypes from "frog-types";
import mongoose from "mongoose";


const { Schema } = mongoose;

const CardSchema = new mongoose.Schema<FrogTypes.Card>({
  _id: Schema.Types.ObjectId,
  createdAt: {
    default: Date.now,
    type: Date,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
});

export const Card = mongoose.model("Card", CardSchema);
