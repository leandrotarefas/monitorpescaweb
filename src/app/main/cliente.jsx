"use client";

import { useEffect, useState } from "react";

import moment from "moment";

import Quadros from "@/app/main/quadros";

export default function Client({ acoes = "JHSF3" }) {
  const [updateAt, setUpdateAt] = useState("");
  const [data, setData] = useState([]);
  const [acoes_, setAcao] = useState(acoes);

  const refreshScreenDate = () => {
    const updatedAt = moment().format("DD/MM/YYYY  h:mm:ss a");
    setTimeout(()=>{      
      setUpdateAt(updatedAt);
    },1000);    
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchApiData(acoes_);
    }, 30000);
    console.log(intervalId);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      refreshScreenDate();
    }, 5000);
    console.log(intervalId);
    return () => clearInterval(intervalId);
  }, []);

  const fetchApiData = (acoes) => {
    fetch("/brapicache?acoes=" + acoes)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.log("interval , ", err.message));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      refreshScreenDate();
      fetchApiData(acoes_);
    }, 20000);
    console.log(intervalId);
    return () => clearInterval(intervalId);
  }, []);

  useState(() => {
    refreshScreenDate();
    fetchApiData(acoes_);
  });

  const periods = [60, 24, 12, 6];

  return (
    <>
      <h5 className="text-sm p-2">Atualizado em {updateAt}</h5>
      <h5 className="text-sm p-2">Ações : {acoes}</h5>
      <main className="flex flex-col items-center justify-between p-2 divide-y-2 divide-gray-200">
        {data &&
          data.map((item, index) => (
            <div key={item.symbol} className="z-10 max-w-full w-full items-center p-0 gap-6 mb-10 font-mono text-sm lg:flex">
                <Quadros key={`${item.symbol}_${index} `} params={item} periods={periods} />
            </div>
          ))}
        
      </main>
    </>
  );
}
