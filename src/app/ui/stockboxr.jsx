"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import clsx from 'clsx';

export function StockBoxR(props) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const ticker = props.ticker;
//   const API_KEY_NAME = process.env.NEXT_PUBLIC_MY_API_KEY;
  const API_KEY_NAME = 'cmo6he1r01qj3mal97u0cmo6he1r01qj3mal97ug';
  const myURL = 'https://finnhub.io/api/v1/quote?symbol=' +
  ticker + '&token=' +
  API_KEY_NAME;
  useEffect(() => {
      fetch(myURL)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div
    id={`${ticker}--containerr`}
    className={clsx(
      'w-[25vw] flex-column flex-none justify-center h-[84px] content-around rounded-lg items-center',
      {
        'bg-red-500 h-full text-white': data.dp <0,
        'bg-green-500' : data.dp>0,
        'bg-gray-300' : data.dp == 0
        
      },
    )}>
      <h1 id={`${ticker}--c`}className="text-end mr-3 truncate font-bold">$ {data.c.toFixed(2)}</h1>
      <h1 id={`${ticker}--dp`} className="text-end mr-3 truncate">{data.dp.toFixed(2)}%</h1>
    </div>
  )
}