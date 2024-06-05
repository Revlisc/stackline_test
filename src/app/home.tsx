'use client'
import Image from "next/image";
import Header from "./dashboard/header";
import Item from "./dashboard/item";

import { useSelector } from "react-redux";
import { RootState } from '../lib/store'
import { Product } from "./types/types";
import SalesTable from "./dashboard/salesTable";
import Chart from "./dashboard/chart";

export default function Home() {
  const product: Product | null = useSelector((state: RootState) => state.product.data)
  
  if (!product) {
    return <div>Fetching product data</div>
  }
  return (
    <main className="">
      <Header />
      <div className="bg-background py-6">
        <div className="py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 mx-2">
          <div className="col-span-1">
            <Item image={product.image} alt={product.title} title={product.title} subtitle={product.subtitle} tags={product.tags}/>
          </div>
          <div className="text-black col-span-3">
            <Chart label={'Retail Sales'} datasets={product.sales}/>
            <SalesTable sales={product.sales} />
            

          </div>
        </div>
        </div>
      </div>
    </main>
  );
}
