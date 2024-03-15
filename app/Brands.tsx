import React from "react";
import Image from "next/image";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Lora({
    subsets: ["latin"],
    weight: ["400"],
  });

const logos=[
    {   
        image:"logo/logoipsum-1.svg",
    },
    // {   
    //     image:"logo/logoipsum-2.svg",
    // },
    {   
        image:"logo/logoipsum-3.svg",
    },
    {   
        image:"logo/logoipsum-4.svg",
    },
    {   
        image:"logo/logoipsum-5.svg",
    },
    {   
        image:"logo/logoipsum-6.svg",
    },
    {   
        image:"logo/logoipsum-7.svg",
    },
];



const Brands = () => {
    return ( <div>
         <div className="text-4xl pt-2 pb-5 md:text-7xl px-6 text-center 
            bg-clip-text
             text-transparent bg-gradient-to-b from-purple-500
            to bg-sky-200 bg-opacity-50">
                Ours brand<br/> 
            </div>
            <p className="text-neutral-300 mt-4 font-normal 
            mx-auto text-center max-w-lg px-4">
               From small businesses to large corporations, we have helped many
          brands elevate their business
            </p>

            <div className="grid grid-cols-3 items-center mx-auto justify-center md:w-3/5 cursor-pointer">
            {logos.map((logo, index)=>(
                <div 
                key={index}
                className="p-4 md:p-20"
                >
                        <Image
                        src={logo.image}
                        alt="shofify store"
                        width={500}
                        height={500}
                        className="rounded-2xl w-full h-auto max-w-full"
                        />
                    </div>
            ))}
            </div>
                   <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-white  ",
            font.className
          )}
        >
          &quot;We got rid of nearly a dozen different tools because of what
          Bird does for us.&quot;
        </div>

        
    </div> );
}
 
export default Brands;