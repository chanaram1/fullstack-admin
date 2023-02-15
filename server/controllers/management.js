import mongoose from "mongoose";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const getAdmins = async (req, res) => {
  try{
    const admins = await User.find({role:"admin"}).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const getUserPerformanace = async (req,res) => {
  try{
    const {id} = req.params;

    const userWithStats = await User.aggregate([
      {$match: {_id: new mongoose.Types.ObjectId(id)}}, //matching the current id and getting their info
      {
        $lookup: { //look up on aff table and compare the current id to the userId in the affiliatestats table
                       //and save it as a property as affiliateStats
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats"
        },
      }, 
      {$unwind: "$affiliateStats"} //flatten the info into this
    ]);

    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id) =>{
        return Transaction.findById(id)
      })
    );

    const filteredSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );

    res.status(200).json({user:userWithStats[0], sales:filteredSaleTransactions})

  } catch (error) {
    res.status(400).json({message: error.message});
  }
}