"use client";
import Image from "next/image";
import Link from "next/link";
import stackline_logo  from '../stackline_logo.svg'


export default function Header() {
    
    return (
        <div className="top-0 z-10 bg-header md:h-12 ">
          <div className="flex justify-between items-center p-4">
            <Image src={stackline_logo} alt='Stackline logo' className="w-20"/>
          </div>
        </div>
    );
}