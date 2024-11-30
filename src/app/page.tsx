import { Footer } from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";

import Image from "next/image";
import Link from "next/link";


 export default function Home (){
  return(
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <Footer/>
      
    
    </div>
  )
 }