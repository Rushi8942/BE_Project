const mongoose = require("mongoose");
const express = require("express");

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/Investment").then(() => {
   console.log("Connected to MongoDB");
 })
 .catch((error) => {
   console.error("Failed to connect to MongoDB:", error);
 });
 const fundSchema = new mongoose.Schema({
    Name: String,
    Category:String,
    SubCategory: String,
    Plan: String,
    CAGR3Y: Number,
    ExpenseRatio: Number,
    CAGR: Number
  });
 
  const Fund = mongoose.model('Fund', fundSchema);
  const createDocument =async()=>{try {
   const mutualFund1=new Fund({
    Name: "Parag Parikh Flexi Cap Fund",
    Category:"Equity",
    SubCategory: "Flexi Cap Fund",
    CAGR: 24.53,
    ExpenseRatio: 0.57,
    })
   
   const mutualFund2=new Fund({
    Name: "	Mahindra Manulife Multi Cap Fund",
    Category:"Equity",
    SubCategory: "Multi Cap Fund",
    Plan: "growth",
    CAGR: 26.27,
    ExpenseRatio: 0.39,
    })

    const mutualFund3=new Fund({
        Name: "	Quant Mid Cap Fund ",
        Category:"Equity",
        SubCategory: "Mid Cap Fund",
        Plan: "growth",
        CAGR: 35.42,
        ExpenseRatio: 0.71,
    })
    const mutualFund4=new Fund({
        Name: "	HDFC ELSS Tax Saver Fund ",
        Category:"Equity",
        SubCategory: "Tax Saver Fund",
        Plan: "growth",
        CAGR: 18.72,
        ExpenseRatio: 1.14,
    })
   
    const mutualFund5=new Fund({
        Name: "PGIM India ELSS Tax Saver Fund",
        Category:"Equity",
        SubCategory: "Tax Saver Fund",
        Plan: "growth",
        CAGR: 18.19,
        ExpenseRatio: 0.78,
    })
    const mutualFund6=new Fund({
        Name: "Bandhan Sterling Value Fund",
        Category:"Equity",
        SubCategory: "Value Fund",
        Plan: "growth",
        CAGR: 23.3,
        ExpenseRatio: 0.65,
    })
    const mutualFund7=new Fund({
        Name: " Quant Multi Asset Fund",
        Category:"Hybrid",
        SubCategory: "Multi Asset Fund",
        Plan: "growth",
        CAGR: 29.72,
        ExpenseRatio: 0.76,
    })
    const mutualFund8=new Fund({
        Name: "  Edelweiss Aggressive Hybrid Fund",
        Category:"Hybrid",
        SubCategory: "Aggressive Hybrid Fund",
        Plan: "growth",
        CAGR: 22.21,
        ExpenseRatio: 0.24,
    })
    const mutualFund9=new Fund({
        Name: " 	Tata Arbitrage Fund",
        Category:"Hybrid",
        SubCategory: "Arbitrage Fund",
        Plan: "growth",
        CAGR: 6.72,
        ExpenseRatio: 0.3,
    })
    const mutualFund10=new Fund({
        Name: "  Baroda BNP Paribas Balanced Advantage Fund",
        Category:"Hybrid",
        SubCategory: "Balanced Advantage Fund",
        Plan: "growth",
        CAGR: 16.25,
        ExpenseRatio: 0.72,
    })
   
    const mutualFund11=new Fund({
        Name: " SBI Magnum Income Fund",
        Category:"Debt",
        SubCategory: "Magnum Income Fund",
        Plan: "growth",
        CAGR: 6.63,
        ExpenseRatio: 0.79,
    })
    const mutualFund12=new Fund({
        Name: " Aditya Birla Sun Life Banking & PSU Debt Fund",
        Category:"Debt",
        SubCategory: "Banking & PSU Debt Fund",
        Plan: "growth",
        CAGR: 6.88,
        ExpenseRatio: 0.38,
    })
    const mutualFund13=new Fund({
        Name: " Nippon India Money Market Fund",
        Category:"Debt",
        SubCategory: "Market Fund",
        Plan: "growth",
        CAGR: 7.66,
        ExpenseRatio: 0.24,
    })
    const mutualFund14=new Fund({
        Name: "  Nippon India Income Fund",
        Category:"Debt",
        SubCategory: "Income Fund",
        Plan: "growth",
        CAGR: 6.44,
        ExpenseRatio: 0.56,
    })
    const mutualFund15=new Fund({
        Name: "   UTI Money Market Fund",
        Category:"Debt",
        SubCategory: "Market Fund",
        Plan: "growth",
        CAGR: 7.63,
        ExpenseRatio: 0.19,
    })
    const mutualFund16=new Fund({
        Name: " Nippon India Corporate Bond Fund",
        Category:"Debt",
        SubCategory: "Corporate Bond Fund",
        Plan: "growth",
        CAGR: 7.21,
        ExpenseRatio: 0.34,
    })
    const mutualFund17=new Fund({
        Name: "   Axis Short Term Fund",
        Category:"Debt",
        SubCategory: "Short Term Fund",
        Plan: "growth",
        CAGR: 7.03,
        ExpenseRatio: 0.34,
    })
    
    const mutualFund18=new Fund({
        Name: " UTI Nifty 50 Index Fund",
        Category:"Index",
        SubCategory: "50 Index Fund",
        Plan: "growth",
        CAGR: 16.73,
        ExpenseRatio: 0.21,
    })
    const mutualFund19=new Fund({
        Name: " ICICI Pru Nifty Next 50 Index Fund",
        Category:"Index",
        SubCategory: "Next 50 Index Fund",
        Plan: "growth",
        CAGR: 24.33,
        ExpenseRatio: 0.30,
    })
    const mutualFund20=new Fund({
        Name: " Motilal Oswal Nifty Midcap 150 ",
        Category:"Index",
        SubCategory: "Nifty Midcap 150",
        Plan: "growth",
        CAGR: 28.20,
        ExpenseRatio: 0.31,
    })
    const mutualFund21=new Fund({
        Name: " Nippon India Nifty Midcap 150 Index Fund",
        Category:"Index",
        SubCategory: "Nifty Midcap 150 Fund",
        Plan: "growth",
        CAGR: 27.93,
        ExpenseRatio: 0.30,
    })
    const mutualFund22=new Fund({
        Name: "Aditya Birla SL Nifty 50 Index Fund",
        Category:"Index",
        SubCategory: "Nifty 50 Fund",
        Plan: "growth",
        CAGR: 16.62,
        ExpenseRatio: 0.20,
    })
    const mutualFund23=new Fund({
            Name: " ICICI Prudential Retirement Fund - Hybrid Conservative Plan",
            Category:"Retirement",
            SubCategory: "Hybrid Conservative  Plan",
            Plan: "growth",
            CAGR: 11.30,
            ExpenseRatio: 1.09,
        })

    const mutualFund24=new Fund({
        Name: " ICICI Prudential Retirement Fund - Hybrid Aggressive Plan",
        Category:"Retirement",
        SubCategory: "Hybrid Aggressive Plan",
        Plan: "growth",
        CAGR: 24.27,
        ExpenseRatio: 0.66,
    })
    const mutualFund25=new Fund({
        Name: " HDFC Retirement Savings Fund - Hybrid Debt Plan ",
        Category:"Retirement",
        SubCategory: "Hybrid Debt Plan",
        Plan: "growth",
        CAGR: 10.46,
        ExpenseRatio: 0.94,
    })
    const mutualFund26=new Fund({
        Name: " UTI Retirement Fund ",
        Category:"Retirement",
        SubCategory: "Retirement Benefit Pension Direct",
        Plan: "direct",
        CAGR: 14.67,
        ExpenseRatio: 0.98,
    })
    const mutualFund27=new Fund({
        Name: " Tata Retirement Savings Fund Moderate Plan",
        Category:"Retirement",
        SubCategory: "Savings Fund Moderate Plan",
        Plan: "growth",
        CAGR: 17.94,
        ExpenseRatio: 0.63,
    })
    
   const result = await Fund.insertMany([mutualFund1,mutualFund2,mutualFund3,mutualFund4,mutualFund5,mutualFund6
    ,mutualFund7,mutualFund8,mutualFund9,mutualFund10,mutualFund11,mutualFund12,mutualFund13,mutualFund14,
    mutualFund15,mutualFund16,mutualFund17,mutualFund18,mutualFund19,mutualFund20,mutualFund21,
    mutualFund22,mutualFund23,mutualFund24,mutualFund25,mutualFund26,mutualFund27,
]);
 } catch (error) {
   console.log(error);
 }
   
    }
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
 
 createDocument();