import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema( //a user must have this structure of this data in the mongoose DB
  {
    userId: String,
    cost: String,
    prodcuts: {
      type: [mongoose.Types.ObjectId],
      of: Number
    }
  },
  {timestamps:true}
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;