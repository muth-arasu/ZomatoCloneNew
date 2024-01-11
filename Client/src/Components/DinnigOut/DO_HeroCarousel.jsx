import React from 'react'
import { useState } from 'react'
//components
import CarouselCard from '../Common/CarouselCard'
import Slider from 'react-slick'
import { NextArrow,PrevArrow } from '../Common/arrow'



const DO_HeroCarousel = () => {
    const [cardData,setCardData]= useState([
        {
            img:"https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png?output-format=webp",
            title:"Great Cafes",
            subtitle:"14 Places",
        },
        {
            img:"https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png?output-format=webp",
            title:"Great Cafes",
            subtitle:"14 Places",
        },
        {
            img:"https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png?output-format=webp",
            title:"Great Cafes",
            subtitle:"14 Places",
        },
        {
            img:"https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png?output-format=webp",
            title:"Great Cafes",
            subtitle:"14 Places",
        },
        {
            img:"https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png?output-format=webp",
            title:"Great Cafes",
            subtitle:"14 Places",
        },
        {
            img:"https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png?output-format=webp",
            title:"Great Cafes",
            subtitle:"14 Places",
        },
        {
            img:"https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png?output-format=webp",
            title:"Great Cafes",
            subtitle:"14 Places",
        },
        {
            img:"https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png?output-format=webp",
            title:"Great Cafes",
            subtitle:"14 Places",
        },
    ])
    const settings ={
  

        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      };
  return (
    <>
    <div className='block w-full gap-3'>
    <Slider {...settings}>
      {
        cardData.map((cardData)=>{
            return <CarouselCard {...cardData}/>
        })
      }
      </Slider>
    </div>
    </>
  )
}

export default DO_HeroCarousel
