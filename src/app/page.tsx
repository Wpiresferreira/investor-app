"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
// import { createTable} from '@/app/lib/requests'

export default async function Home() {
  const router = useRouter();

  
  function goDetails() {
  
    // window.sessionStorage.set("item", "MCD");
    router.push('/details')
  }
  return (
    <main className="bg-orange-400">
      <Link href={"/watch-list"}>Watch List</Link>
      <div onClick={goDetails}>Details 'PBR'</div>
      <div onClick={() => router.push('/testing')}>TESTING</div>
      {/* <button className='w-[300px] h-20 bg-emerald-400' type="button" onClick={createTable}>Create Table</button> */}
    </main>
  );
}
