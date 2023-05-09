import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectsSlider() {


    var settings = {
      loop:true,
      fade:true,
      dots: false,
      arrows:false,
      infinite: true,
      autoplay:true,
      autoplaySpeed:5000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="h-[595px] w-[338px]">
          <div className="bg-[url('/Projects/1-GrocerAppIn-Mobile.png')] h-full w-full bg-cover bg-center bg-no-repeat"></div>
          {/* <img src="/Projects/1-GrocerAppIn-Mobile.png" title="GrocerApp" className="h-full w-full border-none"/> */}
        </div>
        <div className="h-[595px] w-[338px]">
          <div className="bg-[url('/Projects/2-ChatGPT-Mobile.png')] h-full w-full bg-cover bg-center bg-no-repeat"></div>
            {/* <img src="/Projects/2-ChatGPT-Mobile.png" title="ChatGPT Replica" className="h-full w-full border-none"/> */}
        </div>
        {/* <div className="h-[595px] w-[338px]">
         <div className="bg-[url('/Projects/2-ChatGPT-Mobile.png')] h-full w-full bg-cover bg-center bg-no-repeat"></div>
        </div> */}
        <div className="h-[595px] w-[338px]">
          <div className="bg-[url('/Projects/2-ChatGPT-Mobile.png')] h-full w-full bg-cover bg-center bg-no-repeat"></div>
            {/* <img src="/Projects/1-GrocerAppIn-Mobile.png" title="GrocerApp" className="h-full w-full border-none"/> */}
        </div>
        <div className="h-[595px] w-[338px]">
          <div className="bg-[url('/Projects/5-WatchYourDreams-Mobile2.png')] h-full w-full bg-cover bg-center bg-no-repeat"></div>
          {/* <img src="/Projects/5-WatchYourDreams-Mobile.png" title="Watch your Dreams" className="h-full w-full border-none" /> */}
        </div>
      </Slider>
    );
  }