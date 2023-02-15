import mongoose from "mongoose";

const AffiliateStatSchema = new mongoose.Schema( //a user must have this structure of this data in the mongoose DB
  {
    userId: {type: mongoose.Types.ObjectId, ref:"User"},
    AffiliateStat: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction"
    }
  },
  {timestamps:true}
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);

export default AffiliateStat;