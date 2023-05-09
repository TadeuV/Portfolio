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
        <div className="h-[400px] xl:h-[490px] w-[100%] ">
          <div className="bg-[url('/Projects/1-GrocerAppIn-Desk.png')] h-full w-full bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="h-[400px] xl:h-[500px] w-[100%] ">
          <div className="bg-[url('/Projects/2-ChatGPT.png')] h-full w-full bg-contain bg-center bg-no-repeat"></div>
        </div>
        {/* <div className="h-[400px] xl:h-[490px] w-[100%] ">
          <div className="bg-[url('/Projects/1-GrocerAppIn-Desk.png')] h-full w-full bg-cover bg-center bg-no-repeat"></div>
        </div> */}
        <div className="h-[400px] xl:h-[490px] w-[100%] ">
          <div className="bg-[url('/Projects/1-GrocerAppIn-Desk.png')] h-full w-full bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="h-[400px] xl:h-[490px] w-[100%] ">
            <div className="bg-[url('/Projects/5-WatchYourDreams.png')] h-full w-full bg-cover bg-start bg-no-repeat"></div>
        </div>
      </Slider>
    );
  }