import React from 'react'
//components
import DeliveryCatagory from './DeliveryCatagory'
import Slider from 'react-slick'
import { NextArrow,PrevArrow} from '../arrow'
const DeliveryCarousel = () => {

  const DeleveryCatogoryImg = [
    {
        img: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
        name:"Biryani"
    },
    {
        img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        name:"Pizza"
    },
    {
        img: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
        name:"Chicken"
    },
    {
        img: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        name:"Burger"
    },
    {
        img: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
        name:"Cake"
    },
    {
        img: "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
        name:"chaat"
    },
    {
        img: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        name:"Rolls"
    },
    {
        img: "https://b.zmtcdn.com/data/o2_assets/e1b5ebed94e25d832f8dea96824537521678798686.png",
        name:"South Indian"
    },
    {
        img: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
        name:"Fried Rice"
    },
    {
        img: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
        name:"Paratha"
    },
    {
        img:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
        name:"Sanwich"
    },
    {
        img:"https://b.zmtcdn.com/data/dish_photos/03a/21948feb4ea122ab37acf633ed7ec03a.jpg",
        name:"Parotta"
    },
    
]
const brandLogo =[
  {
      img:"https://b.zmtcdn.com/data/brand_creatives/logos/92cb4e710a3f6019f0f4958c35e786c2_1568614848.png",
      name:"Shree Anandhaas",
      timing:"21 min",
  },
  {
      img:"https://b.zmtcdn.com/data/brand_creatives/logos/381f5d7481d4cf08b35a063b8787070b_1617918168.png",
      name:"Sree Annapoorna ",
      timing:"21 min",
  },
  {
      img:"https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613214750.png",
      name:"KFC",
      timing:"23 min",
  },
  {
      img:"https://b.zmtcdn.com/data/brand_creatives/logos/e5b584c45976692fd36159ec21a35981_1597745602.png",
      name:"Haribavanam",
      timing:"41 min",
  },
  {
      img:"https://b.zmtcdn.com/data/brand_creatives/logos/5f5a748c79866ef0201f2c198831bedc_1630658428.png",
      name:"Kwality Wall’s Frozen Dessert and Ice Cream Shop",
      timing:" 15 min",
  },
  {
      img:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
      name:"Pizza Hut",
      timing:"35 min",
  },
  {
      img:"https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1545223343.png",
      name:"Domino's Pizza",
      timing:"31 min",
  },
  {
      img:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187820.png",
      name:"Burger King",
      timing:"38 min",
  },
  {
      img:"https://b.zmtcdn.com/data/brand_creatives/logos/0956194de2534812e820317cd4b0ccd3_1630505737.png",
      name:"Dindigul Thalappakatti",
      timing:"33 min",
  },
  {
      img:"https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983649.png",
      name:"McDonald's",
      timing:"48 min",
  },
]
 const settings ={
  

  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  PrevArrow:<PrevArrow/>,
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
      <h1 className='lg:text-2xl font-semibold mb-6'>Inspration for your first order</h1>
   
      <div className='block mb-6'>
        <Slider {...settings}>
        {DeleveryCatogoryImg.map((food)=>{
         return( <DeliveryCatagory {...food} /> )})}
        </Slider>
      </div>
      <h1 className='lg:text-2xl font-semibold mb-6 '>Top Brands</h1>
      <div className='block '>
        <Slider {...settings}>
        {brandLogo.map((food)=>{
         return( <DeliveryCatagory {...food} /> )})}
        </Slider>
      </div>

    </>
  )
}

export default DeliveryCarousel

