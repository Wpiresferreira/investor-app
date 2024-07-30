"use client";
import { StockBoxL } from "./stockboxl";
import { StockBoxR } from "./stockboxr";
import { useRouter } from 'next/navigation';

export function StockBox(props) {
  const ticker = props.ticker;
  const router = useRouter();

  function goDetails(argumen) {
    var ticker = argumen.target.id.split("--")[0];
    console.log(ticker);

    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("ticker", ticker);
     
      //setUsername(username);
    }

    router.push('../details')

  }

  return (
    <div
      id={ticker}
      onClick={goDetails}
      className="flex flex-column justify-between ml-[5vw] mt-3 h-[84px] w-[90vw] bg-blue-200 rounded-lg"
    >
      <StockBoxL ticker={ticker} />
      <StockBoxR ticker={ticker} />
    </div>
  );
}
