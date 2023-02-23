import mongoose from "mongoose";
import { Types } from "mongoose";

const { Schema } = mongoose;

const sellerSchema = new Schema(
    {
        id:{
            type: Types.ObjectId,
        },
        hotelname:{
            type: String,
        },
        username:{
            type: String,
        },
        location:{
            type: String,
        }
    }
);

export default mongoose.model("seller", sellerSchema);