import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "./Button"

const SpecialOffer = () => {
  return (
    <section className=" flex items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className=" flex-1">
      <img src={offer} alt="offer"
      width={573}
      height={480}
      className=" object-contain w-full" />
    </div>
    <div className=" flex flex-1 flex-col">
        
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg  font-bold">
          <span className=" text-coral-red ">Special</span> Offers
         
       </h2>
       <p className="  mt-4 info-text lg:max-w-lg">
        Ensuring premium comfort and style our metiuclously crafted footwer is designed to elevate your exprience ,providing you with unmatched quality, innovation and touch of elegance.
       </p>
       <p className=" mt-6 lg:max-w-lg info-text">
        Our dedication to detail and execellence ensure your satisfaction
       </p>
       <div className=" mt-11 flex flex-wrap gap-4">
       <Button 
       label="Shop Now"
       iconURL={arrowRight} />
      <Button 
        label="Learn more"
        backgroundcolor="bg-white"
        bordercolor="border-slate-gray"
        textcolor="text-slate-gray"
      />
    </div>
   </div>
    </section>
  )
}

export default SpecialOffer
