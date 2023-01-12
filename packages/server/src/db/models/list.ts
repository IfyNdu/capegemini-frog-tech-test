import mongoose from "mongoose";
import * as FrogTypes from "frog-types";


const { Schema } = mongoose;

const ListSchema = new Schema<FrogTypes.List>({
  _id: Schema.Types.ObjectId,
  createdAt: {
    default: Date.now,
    type: Date,
  },
  name: {
    type: String,
    required: true,
  },
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
});

export const List = mongoose.model("List", ListSchema);
