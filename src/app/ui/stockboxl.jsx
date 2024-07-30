"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from './stockbox.module.css'

export function StockBoxL(props) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const ticker = props.ticker;
  //   const API_KEY_NAME = process.env.NEXT_PUBLIC_MY_API_KEY;
  const API_KEY_NAME = "cmo6he1r01qj3mal97u0cmo6he1r01qj3mal97ug";

  const myURL =
    "https://finnhub.io/api/v1/stock/profile2?symbol=" +
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

  return (
    <div id={`${ticker}--containerl`} className='w-[65vw] m1-1 flex items-center flex-auto'>
      <div id={`${ticker}--containerimg`} className='p-3 table-column min-h-[84px] min-w-[84px]'>
        <img id={`${ticker}--img`} className='rounded-lg' src={data.logo} width={60} height={60} />
      </div>
      <div id={`${ticker}--containerdescription`}className='flex-column justify-center'>
        <h1 id={`${ticker}--ticker`} className='font-bold truncate w-[calc(65vw-84px)]'>{data.ticker}</h1>
        {/* <h2 className={`${styles.marquee} whitespace-nowrap truncate w-[calc(65vw-84px)]`}>{data.name}</h2> */}
        <h2 id={`${ticker}--description`}className={`whitespace-nowrap truncate w-[calc(65vw-84px)]`}>{data.name}</h2>
      </div>
    </div>
  );
}
