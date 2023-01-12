import mongoose from "mongoose";
import * as FrogTypes from "frog-types";


const { Schema } = mongoose;

const BoardSchema = new Schema<FrogTypes.Board>({
  _id: Schema.Types.ObjectId,
  createdAt: {
    default: Date.now,
    type: Date,
  },
  name: {
    type: String,
    required: true,
  },
  list: [{ type: Schema.Types.ObjectId, ref: 'List' }]
});

export const Board = mongoose.model("Board", BoardSchema);
