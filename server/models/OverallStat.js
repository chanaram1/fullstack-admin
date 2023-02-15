import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema( //a user must have this structure of this data in the mongoose DB
  {
    totalCustomers: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      { 
        monthly: String,
        totalSales: Number,
        totalUnits:Number
      }
    ],
    dailyData: [{
      date: String,
      totalSales: Number,
      totalUnits: Number
    }],
    salesByCategory: {
      type: Map, //creates an object
      of: Number,
    }
  },
  {timestamps:true}
);

const OverallStat = mongoose.model("OverallStat", OverallStatSchema);

export default OverallStat;