import mongoose from "mongoose";

import { Types } from "mongoose";

const { Schema } = mongoose;


const locationSchema = new Schema(
    {
        id:{
            type:Types.ObjectId,
        },
        name:{
            type: String,
            required: "Location is required",
        },
        createdDate:{
          type : Date,  
        },       
    },
    {timestamps: true}
);

export default mongoose.model("Location", locationSchema);