'use client'
import { CardHoverEffectDemo } from "./snippets/HoverEffect";

const Services = () => {
    return (  <div className="max-w5xl py-20 mx-auto">
         <div className=" text-4xl pb-5 md:text-7xl px-6 text-center 
            bg-clip-text
             text-transparent bg-gradient-to-b from-blue-400
            to bg-neutral-50 bg-opacity-50">
                Streamline your business with our services
            </div>
            <p className="text-neutral-300 mt-4 font-normal 
            mx-auto text-center max-w-lg px-4">
             From a attractive website design, We offer a services to grow your business  
            </p>
            <CardHoverEffectDemo/>
    </div>  );
}
 
export default Services;