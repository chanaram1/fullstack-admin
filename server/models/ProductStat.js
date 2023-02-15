import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema( //a product must have this structure of this data in the mongoose DB
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      { //to allow people to see how many sales month/month
        monthly: String,
        totalSales: Number,
        totalUnits:Number
      }
    ],
    dailyData: [{
      date: String,
      totalSales: Number,
      totalUnits: Number
    }]
  },
  {timestamps:true}
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);

export default ProductStat;