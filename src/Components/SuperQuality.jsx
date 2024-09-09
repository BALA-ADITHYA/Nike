import { shoe8 } from "../assets/images"
import Button from "./Button"

const Superquality = () => {
  return (
   <section id="about-us"
   className=" flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className=" flex flex-1 flex-col">
        
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg  font-bold">
          we Provide You
          <span className=" text-coral-red ">Super Quality</span>Shoes
         
       </h2>
       <p className="  mt-4 info-text lg:max-w-lg">
        Ensuring premium comfort and style our metiuclously crafted footwer is designed to elevate your exprience ,providing you with unmatched quality, innovation and touch of elegance.
       </p>
       <p className=" mt-6 lg:max-w-lg info-text">
        Our dedication to detail and execellence ensure your satisfaction
       </p>
       <div className=" mt-11">
       <Button 
       label="View Details" />
    </div>
   </div>
   <div className=" flex flex-1 justify-center items-center">
          <img src={shoe8} alt="shoe8"
          width={470}
          height={422}
          className=" object-contain" />
    </div>
   </section>
  )
}

export default Superquality
