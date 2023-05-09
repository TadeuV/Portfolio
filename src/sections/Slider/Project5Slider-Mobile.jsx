import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectsSlider() {


    var settings = {
      loop:true,
      fade:true,
      dots: true,
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
        <div className="h-[500px] w-[90%]">
          <div className="bg-[url('/Projects/5-WatchYourDreams-Mobile.png')] h-full w-full bg-contain  bg-center  bg-no-repeat"></div>
        </div>
      </Slider>
    );
  }