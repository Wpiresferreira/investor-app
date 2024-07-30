"use client";
import { useEffect, useState } from "react";

export default function BodyDetails() {
  const [tickerSaved, setTickerSaved] = useState("");

  if (
    typeof window !== "undefined" &&
    window.localStorage &&
    tickerSaved == ""
  ) {
    // let username = localStorage.getItem("username");
    // setUsername(username);
    setTickerSaved(localStorage.getItem("ticker"));
  }

  const [data, setData] =  useState(null);
  const [isLoading, setLoading] = useState(true);
  const ticker = tickerSaved;
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
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  function getDate(ms){


    return new Date(ms*1000).toLocaleString();

  }

  return (
    <>
      <h1
        id={`${ticker}-ticker`}
        className="font-bold truncate w-[calc(65vw-84px)]"
      >
        Ticker: {ticker}
      </h1>
      <h1
        id={`${ticker}-ticker`}
        className="font-bold truncate w-[calc(65vw-84px)]"
      >
        Current: {data.c}
      </h1>
      <h2
        id={`${ticker}-description`}
        className={`whitespace-nowrap truncate w-[calc(65vw-84px)]`}
      >
        Variation: {data.d}
      </h2>
      <h2
        id={`${ticker}-description`}
        className={`whitespace-nowrap truncate w-[calc(65vw-84px)]`}
      >
        %: {data.dp}
      </h2>
      <h2
        id={`${ticker}-description`}
        className={`whitespace-nowrap truncate w-[calc(65vw-84px)]`}
      >
        High: {data.h}
      </h2>
      <h2
        id={`${ticker}-description`}
        className={`whitespace-nowrap truncate w-[calc(65vw-84px)]`}
      >
        Low: {data.l}
      </h2>
      <h2
        id={`${ticker}-description`}
        className={`whitespace-nowrap truncate w-[calc(65vw-84px)]`}
      >
        Open: {data.o}
      </h2>
      <h2
        id={`${ticker}-description`}
        className={`whitespace-nowrap truncate w-[calc(65vw-84px)]`}
      >
        Previous Close: {data.pc}
      </h2>
      <h2
        id={`${ticker}-description`}
        className={`whitespace-nowrap truncate w-[calc(65vw-84px)]`}
      >
        Last Update: {getDate(data.t)}
      </h2>
    </>
  );
}
