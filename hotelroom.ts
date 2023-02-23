import mongoose from "mongoose";
import { Types } from "mongoose";

const { Schema } =mongoose;

const hotelRoomSchema = new Schema(
    {
        id:{
            type: Types.ObjectId,
        },
        name:{
            type: String,
            required:"Name is required.",
        },
        location:{
            type:String,
            required:"Location is required.",
            /// <reference path="location.ts" />
            
        },
        decription:{
            type: String,
            required:"required",
        },
        price:{
            type:Number,
            required:"price is required", 
        },
        postedBy:{
            type:Types.ObjectId,
        },
        image:{
            type: String,
        },
        bed:{
            type: Number,
        },
        sceneryfacing:{
            type:Boolean,
        },
        ticketing:{
            type: Boolean,
        },
        rental:{
            type: Boolean,
        },
        balcony:{
            type: Boolean,
        },
        swimmingpool:{
            type: Boolean,
        },
        createdDate:{
            type: Date,
        },
    }
);

export default mongoose.model("Hotelroom", hotelRoomSchema);