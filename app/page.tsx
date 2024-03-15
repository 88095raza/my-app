'use client'


import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import SliderOne from "@/components/ui/slider";
import Image from "next/image";
import Link from "next/link";
import WebsiteDesign from "./website-design";
import GraphicDesign from "./Graphic-Design";
import ShopifyStore from "./shopify";
import Brands from "./Brands";
import ScrollUpButton from "@/components/ui/ScrollUp";
import Services from "./services";
import FAQS from "./faq";
import { useRef } from "react";



export default function Home(){
  const WebsiteDesignRef= useRef<HTMLDivElement>(null);
  const GraphicDesignRef= useRef<HTMLDivElement>(null);
  const ShopifyStoreRef= useRef<HTMLDivElement>(null);
  const BrandsRef= useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    WebsiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  const scrollToGraphicDesign = () => {
    GraphicDesignRef.current?.scrollIntoView({  behavior: "smooth" , block:"end",});
  };
  const scrollToShopifyDesign = () => {
    ShopifyStoreRef.current?.scrollIntoView({ behavior: "smooth" , block:"end",});
  };
  const scrollToBrandsDesign = () => {
    BrandsRef.current?.scrollIntoView({ behavior: "smooth" , block:"end",});
  };
  
    return(
        <div className="w-full md:items-center md:justify-center 
         bg-black/[0.94] antialiased bg-grid-white[0.02] relative
          overflow-hidden">
         <Navbar
             scrollToWebsiteDesign={scrollToWebsiteDesign}  
             scrollToGraphicDesign={scrollToGraphicDesign}
             scrollToShopifyDesign={scrollToShopifyDesign}
             scrollToBrandsDesign={scrollToBrandsDesign}
         />
         <Spotlight 
         className="hidden md:flex  left-80"
         fill="white"
         />
         <div className="p-4 mx-auto relative z-10 w-full pt-10 
         md:pt-20 px-2">
            <div className="text-4xl pb-5 md:text-7xl px-6 text-center 
            bg-clip-text
             text-transparent bg-gradient-to-b from-neutral-50
            to bg-neutral-400 bg-opacity-50">
                Create, grow, and <br/> scale your business
            </div>
            <p className="text-neutral-300 mt-4 font-normal 
            mx-auto text-center max-w-lg px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Dignissimos cum at temporibus enim nihil repellat
                  autem, excepturi vero placeat error esse maiores dolore 
            </p>
            
          <Link 
          href="/book" 
          className="cursor-pointer flex items-center justify-center
           border rounded-full w-48 mx-auto my-6 text-white p-2">
            Book a call
          </Link>
            <div className="w-full pt-20">
            <SliderOne/>
            </div>
           
            <div ref={WebsiteDesignRef}>
            <WebsiteDesign/>
            </div>
            <div ref={GraphicDesignRef}>
            <GraphicDesign/>
            </div>
            <div ref={ShopifyStoreRef}>
            <ShopifyStore/>
            </div>
            <div ref={BrandsRef}>
            <Brands/>
            </div>
            <Services/>
            <FAQS/>
            <ScrollUpButton/>
        
         </div>
        </div>
    );
}