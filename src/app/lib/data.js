import { useEffect, useState } from "react";

export function getDetails(ticker) {
    
    const [data, setData] =  useState(null);
   
    //   const API_KEY_NAME = process.env.NEXT_PUBLIC_MY_API_KEY;
    const API_KEY_NAME = "cmo6he1r01qj3mal97u0cmo6he1r01qj3mal97ug";
  
    const myURL =
        "https://finnhub.io/api/v1/quote?symbol=" +
      ticker +
      "&token=" +
      API_KEY_NAME;
    useEffect(() => {
      fetch(myURL)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, []);
  
    return data;
}