"use client";

import { useEffect, useState } from "react";

import moment from "moment";

export default function Client({ children, acao = "JHSF3" }) {
  const [updateAt, setUpdateAt] = useState("");
  const [data, setData] = useState("");
  const [acao_, setAcao] = useState(acao);

  const updateRefreshDate = ()=>{
    const updatedAt = moment().format("DD/MM/YYYY  h:mm:ss a");
    setUpdateAt(updatedAt);
  }

  const fetchApiData = (acao) => {
    fetch("/brapicache?acoes=" + acao)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log("interval , ", err.message));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRefreshDate();
      fetchApiData(acao_);
    }, 5000);
    console.log(intervalId);
    return () => clearInterval(intervalId);
  }, []);

  useState(()=>{  
    updateRefreshDate();
    fetchApiData(acao_);
  })



  /* setInterval(()=>{
    fetch('/brapicache?acoes='+stocks)
    .then( (response) => response.json() )
    .then( (data) => setData(data) )
    .catch(err=> console.log("interval , " , err.message))
}, 30000);*/

  return (
    <>
      <h5 className="text-sm">Atualizado em {updateAt}</h5>
      {/*children*/}

      <h3>
        {data?.symbol}, {data?.updatedAt} {acao}
      </h3>
    </>
  );
}
