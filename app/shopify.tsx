'use client'

import Image from "next/image";


const stores = [
        {
            image:"/images/image2.png",
            quote:
            "Bird showed us to get started, what to do, and how to do it.",
          name: "Jason scer"

        },
        {
            image: "/images/shop-2.jpeg",
            quote:
              "We had no idea how to get started, but Bird showed us the way. And we were able to create something amazing.",
            name: "John Prency",
          },
        
          {
            image: "/images/s-2.webp",
            quote:
              "The team at Bird is amazing. They helped us create a stunning store that we are proud of.",
            name: "Miguel Martinez",
          },
]
const ShopifyStore = () => {
    return ( 
        <section
        className="mt-10 md:py-10 bg-[#e9e6e6] w-full 
         rounded-3xl"
        >
       
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center 
        bg-clip-text
         text-transparent bg-gradient-to-b from-purple-500
        to bg-sky-200 bg-opacity-50">
            Shopify Stores <br/> 
        </div>
        <p className="text-neutral-800 mt-4 font-normal 
        mx-auto text-center max-w-lg px-4">
            We create stunning Shopify stores that are designed to convert. 
        </p>
        <div className="md:flex justify-center">
            {stores.map((store, index)=>(
                <div 
                key={index}
                className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
                >
                    <div className="flex flex-col items-center justify-center ">
                        <Image
                        src={store.image}
                        alt="shofify store"
                        width={400}
                        height={400}
                        className="rounded-2xl"
                        />
                        <p className="text-neutral-800 font-bold text-sm mt-4 text-center">
                        &quot;{store.quote}&quot;
                        </p>
                        <p className="text-neutral-700 font-bold text-sm mt-4">
                        - {store.name}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        </section>
     );
}
 
export default ShopifyStore;