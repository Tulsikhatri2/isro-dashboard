"use client"

import React, { useEffect, useState } from 'react'
import { useDataContext } from "@/app/dashboard/dataProvider";
import Loader from '@/app/Components/Loader/Loader';
import Error from '@/app/Components/Error/Error';
import { IoCaretBackCircleOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const Launchers = () => {
  const { data, loading, error } = useDataContext();
  const [searchData, setSearchData] = useState<string>("")
  const [launchersData, setLaunchersData] = useState<any>([])
  const [searchedLaunchers, setSearchedLaunchers] = useState<any>([])
  const router = useRouter()

  useEffect(()=>{
    setLaunchersData(data?.launchers)
  },[data])

  useEffect(()=>{
    if(searchData){
      setSearchedLaunchers(launchersData?.filter((item:{id:string})=>
      item.id.toLowerCase().includes(searchData.toLowerCase())))
    }
    else{
      setSearchedLaunchers(launchersData)
    }
},[data,searchData, launchersData])

  if (loading) return <Loader/>;
  if (error) return <Error/>;

  return (
    <div  className="w-[100%] h-[100%] px-8 flex flex-col items-center">
       <div className="w-[100%] h-auto flex items-center p-10">
       <div className="w-auto" >
        <button className="text-black hover:text-gray-600 mt-2"
        onClick={()=>router.push("/dashboard")}>
          <IoCaretBackCircleOutline  size={30}/>
        </button>
      </div>
        <p className="underline ml-[5%]">Launchers Data</p>
        <div>
        <div className="group ml-[33vw]">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input className="input" type="search" placeholder="Search..." value={searchData}
          onChange={(e)=>setSearchData(e.target.value)}/>
        </div>
        </div>
      </div>
          <div className="w-[100%] h-[80%] flex flex-wrap items-center justify-between overflow-auto ">
        {searchedLaunchers?.map((item:{id:string})=> {
          return(
            <>
            <div className="card p-3 mt-5" style={{height:"10vh"}}>
          <div className="card-details">
            <p className="font-bold text-sm">ID : {item.id}</p>
          </div>
        </div>
            </>
          )
        })

        }
        
      </div>
    </div>
  )
}

export default Launchers