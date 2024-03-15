import Image from "next/image";
const WebsiteDesign = () => {
    return ( 
        <div className="text-white 50px">
           <div className="text-4xl pb-5 md:text-7xl px-6 text-center 
            bg-clip-text
             text-transparent bg-gradient-to-b from-purple-500
            to bg-sky-200 bg-opacity-50">
                Websites Design <br/> thats works
            </div>
            <p className="text-neutral-300 mt-4 font-normal 
            mx-auto text-center max-w-lg px-4 pb-6">
                Custom solution for you business. We are a team 
                of creatives who are excited to grow your business.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
            <div>
            <Image
                priority
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt='logo'
                width={500}
                 height={500}
                 className=" h-auto max-w-full rounded-lg"
                />
                </div>
            <div>
            <Image
                priority
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt='logo'
                width={500}
                 height={500}
                 className=" h-auto max-w-full rounded-lg"
                />
                </div>
            <div>
            <Image
                priority
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt='logo'
                width={500}
                 height={500}
                 className=" h-auto max-w-full rounded-lg"
                />
                </div>
            </div>    
            <div className="grid gap-4">
            <div>
            <Image
                priority
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt='logo'
                width={500}
                 height={500}
                 className=" h-auto max-w-full rounded-lg"
                />
                </div>
            <div>
            <Image
                priority
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt='logo'
                width={500}
                 height={500}
                 className=" h-auto max-w-full rounded-lg"
                />
                </div>
            <div>
            <Image
                priority
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt='logo'
                width={500}
                 height={500}
                 className=" h-auto max-w-full rounded-lg"
                />
                </div>
            </div>
            <div className="grid gap-4">
            <div>
            <Image
                priority
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt='logo'
                width={500}
                 height={500}
                 className=" h-auto max-w-full rounded-lg"
                />
                </div>
            <div>
            <Image
                priority
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt='logo'
                width={500}
                 height={500}
                 className=" h-auto max-w-full rounded-lg"
                />
                </div>
            <div>
            <Image
                priority
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt='logo'
                width={500}
                 height={500}
                 className=" h-auto max-w-full rounded-lg"
                />
                </div>
            </div>
            <div className="grid gap-4">
            <div>
            <Image
                priority
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt='logo'
                width={500}
                 height={500}
                 className=" h-auto max-w-full rounded-lg"
                />
                </div>
            <div>
            <Image
                priority
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt='logo'
                width={500}
                 height={500}
                 className=" h-auto max-w-full rounded-lg"
                />
                </div>
            <div>
            <Image
                priority
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt='logo'
                width={500}
                 height={500}
                 className=" h-auto max-w-full rounded-lg"
                />
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default WebsiteDesign;