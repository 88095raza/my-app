import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FAQS = () => {
    return ( <div className="mt-10 md:py-10 bg-[#efeeee] rounded-3xl w-full ">
        <div className="p-10 md:p-4 md:px-20">
            <div className="text-3xl md:text-3xl text-black font bold">
                Have question ?
            </div>
            <div className=" font-semibold text-3xl md:text-6xl text-gradient 
            bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
                Get answer.
            </div>
    
      <Accordion type="single" collapsible >
      <AccordionItem value="item-1">
        <AccordionTrigger>What is bird?</AccordionTrigger>
        <AccordionContent>
        Bird is a full fledge marketing agency that specializes in 
        branding, web design, and digital marketing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How to start ?</AccordionTrigger>
        <AccordionContent>
        You can start by contacting us. We will get back to you within 24 hours.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>    Pricing ?</AccordionTrigger>
        <AccordionContent>
        We offer custom tailored solutions for your business. Contact us to get a quote.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>    Support ?</AccordionTrigger>
        <AccordionContent>
        We offer Monday-Friday support for all our clients.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
    </div> );

}
 
export default FAQS;