"use client"
import {getDescription} from '/src/app/lib/data';
const finnhub = require("finnhub");


export default async function StockBox(props) {
    
    var stockData;
    try{
    const api_key = finnhub.ApiClient.instance.authentications["api_key"];
    api_key.apiKey = process.env.MY_API_KEY; // Replace this
    // console.log("api_key.apiKey");
    // console.log(api_key.apiKey);

    const finnhubClient = new finnhub.DefaultApi();


    //Company profile2
    finnhubClient.companyProfile2(
      { symbol: "AAPL" },
      async (error, data, response) => {
         console.log('data');
         console.log(data);
         stockData = await data;
      }
    );
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
  console.log('stockData');
  console.log(stockData);

    // const result =  getDescription('STNE');

    // await new Promise((resolve) => setTimeout(resolve, 1000))

    return<div>
        My Stock Box
        {stockData.name}
    </div>
};