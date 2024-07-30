import Image from "next/image";
import Link from "next/link";
import {StockBox} from "../ui/stockbox.jsx"

export default function Home() {
  const tickers = ['btc-usd', 'AMX', 'MC', 'V', 'STNE', 'PBR', 'KO', 'MCD']
  

  return (
    <main className="bg-orange-400">
      <p>Watchlist page. </p>
      <br></br>
      <br></br>
      <input type="email"/>
      <br></br>
      <br></br>
      <div>
        {tickers.map((ticker) => {
          return (
            <StockBox 
            key={ticker}
            ticker={ticker}/>
          )
        })}
        </div>
      {/* <StockBox ticker='STNE'/>
      <StockBox ticker='BDORY'/> */}
      
    </main>
  );
}
