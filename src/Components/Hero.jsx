import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { shoes, statistics } from "../constant"
import Button from "./Button"
import ShoeCard from "./ShoeCard"
const Hero = () => {

  const [bigShoeImg,setBigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className=" w-full flex flex-col xl:flex-row justify-center max-container gap-10 min-h-screen  p-2"
    >
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className=" text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]  font-bold">
          <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">The New Arrival</span>
          <br />
          <span className=" text-coral-red inline-block mt-3">Nike</span>
          Shoes
       </h1>
       <p className=" font-montserrat text-slate-gray leading-8 text-lg mt-6 mb-14 sm:max-w-sm">
        Discover Stylish Nike Arrivals, quality comfort,and innovation for your active life.
       </p>
       <Button 
       label="Shop now"
       iconURL={arrowRight} />
       <div className=" flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((state,index)=> (
            <div key={state.label}>
              <p className=" text-4xl font-palanquin font-bold">{state.value}</p>
              <p className=" font-montserrat text-slate-gray leading-7">{state.label}</p>
            </div>
          ))}
       </div>
      </div>
      <div className=" relative flex-1 justify-center items-center flex xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center bg-hero">
        <img src={bigShoeImg} alt="shoe collection"
        width={610}
        height={500}
        className=" object-contain relative z-10" />

        <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6" >
        {shoes.map((shoe)=> (
          <div key={shoe}>
            <ShoeCard 
              imgURL={shoe}
              changeBigShoeImage={
                (shoe)=>{setBigShoeImg(shoe)}
              }
              bigShoeImg = {bigShoeImg}
            />
          </div>
        ))}

        </div>
      </div>
    </section>
  )
}

export default Hero
