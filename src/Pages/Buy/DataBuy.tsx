import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Product, RootType } from './Model'
import DataBuyCrd from './DataBuyCrd'

export default function DataBuy() {

  const [datas, setDatas] = useState<Product[]>([])
  const getDatas = async () => {
    const { data } = await axios.get<RootType>("https://dummyjson.com/products")
    setDatas(data.products);
  }
  useEffect(() => {
    getDatas();
  }, [])

  return (
    <>
     
      {datas.map((item) => {
        return (
          DataBuyCrd(item)
        );
      })}

    </>
  )
}
