'use client'
import Image from "next/image";
import Header from "./dashboard/header";
import Item from "./dashboard/item";

import { Provider, useDispatch } from "react-redux";
import store, { AppDispatch } from '../lib/store'
import { Product } from "./types/types";
import { useEffect } from "react";
import axios from "axios";
import { setProduct } from "@/lib/features/dashboard/productSlice";
import Home from './home'

export default function Page() {
  
  
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}
