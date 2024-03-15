'use client'
import{ motion } from 'framer-motion'
import { ThreeDCard } from './snippets/3d-card-snippets';
import { EvervaultCardDemo } from './snippets/hover-snippets';

const GraphicDesign = () => {
    return ( <div>
         <div className="text-4xl pb-5 md:text-7xl px-6 text-center 
            bg-clip-text
             text-transparent bg-gradient-to-b from-purple-500
            to bg-sky-200 bg-opacity-50">
                Graphic design <br/> 
            </div>
            <p className="text-neutral-300 mt-4 font-normal 
            mx-auto text-center max-w-lg px-4">
                We create stunning visual brand. From logo to
                social media post, we have got you covered. 
            </p>
            <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
            <motion.div
            initial={{y: 100, opacity: 0}}
            animate= {{y: 0, opacity:1}}
             className="px-10 md:px-0"
            >
                <ThreeDCard/>
            </motion.div>
            <motion.div
            initial={{y: 100, opacity: 0}}
            animate= {{y: 0, opacity:1}}
             className="px-10 md:px-0"
            >
            <EvervaultCardDemo/>
        
            </motion.div>

            </div>
         
    </div> );
}
 
export default GraphicDesign;