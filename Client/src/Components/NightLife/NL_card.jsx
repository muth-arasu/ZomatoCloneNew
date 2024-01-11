import React from 'react'
import { useState } from 'react'

//components
import Card from '../Common/Card'




const NL_Card = () => {
  const [cardData,setCardData] = useState([
    {
        img:"https://b.zmtcdn.com/data/pictures/6/19882906/bf96fc9bb49aab17d0447ee63bf4623a_o2_featured_v2.jpg?output-format=webp",
        offer:"50% OFF",
        ispromted:true,
        title:"New Pizza King",
        ratings:"3.9",
        subtitle:"Pizza,fastfood",
        payment:"₹150 for one",
        timing:"42 min",
        isMaxSafety:true
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/1/19107721/d6a834a3ee8290f6ab3968062769c40a_o2_featured_v2.jpg?output-format=webp",
        offer:"50% OFF",
        ispromted:true,
        title:"New Pizza King",
        ratings:"3.9",
        subtitle:"Pizza,fastfood",
        payment:"₹150 for one",
        timing:"42 min",
        isMaxSafety:true
    },
    {

        img:"https://b.zmtcdn.com/data/pictures/1/19889671/9f79123a804af560cae3d19ffe692e9e_o2_featured_v2.jpg?output-format=webp",
        offer:"50% OFF",
        ispromted:true,
        title:"New Pizza King",
        ratings:"3.9",
        subtitle:"Pizza,fastfood",
        payment:"₹150 for one",
        timing:"42 min",
        isMaxSafety:true
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/chains/0/3400010/071fc6c5c0480fb041b72ff6d75a67a2_o2_featured_v2.jpg?output-format=webp",
        offer:"50% OFF",
        ispromted:true,
        title:"New Pizza King",
        ratings:"3.9",
        subtitle:"Pizza,fastfood",
        payment:"₹150 for one",
        timing:"42 min",
        isMaxSafety:true
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/8/19353658/3fa2940b698c032dab37e9acc9312a9c_o2_featured_v2.jpg?output-format=webp",
        offer:"50% OFF",
        ispromted:true,
        title:"New Pizza King",
        ratings:"3.9",
        subtitle:"Pizza,fastfood",
        payment:"₹150 for one",
        timing:"42 min",
        isMaxSafety:true
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/chains/1/19461231/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg?output-format=webp",
        offer:"50% OFF",
        ispromted:true,
        title:"New Pizza King",
        ratings:"3.9",
        subtitle:"Pizza,fastfood",
        payment:"₹150 for one",
        timing:"42 min",
        isMaxSafety:true
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/chains/4/3400934/f6e6aba198dcd8848208a92b322d4a93_o2_featured_v2.jpg?output-format=webp",
        offer:"50% OFF",
        ispromted:true,
        title:"New Pizza King",
        ratings:"3.9",
        subtitle:"Pizza,fastfood",
        payment:"₹150 for one",
        timing:"42 min",
        isMaxSafety:true
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/9/3401239/041e9e63c39fa333d0513ded19251c55_o2_featured_v2.jpg?output-format=webp",
        offer:"50% OFF",
        ispromted:true,
        title:"New Pizza King",
        ratings:"3.9",
        subtitle:"Pizza,fastfood",
        payment:"₹150 for one",
        timing:"42 min",
        isMaxSafety:true
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/6/19882906/bf96fc9bb49aab17d0447ee63bf4623a_o2_featured_v2.jpg?output-format=webp",
        offer:"50% OFF",
        ispromted:true,
        title:"New Pizza King",
        ratings:"3.9",
        subtitle:"Pizza,fastfood",
        payment:"₹150 for one",
        timing:"42 min",
        isMaxSafety:true
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/6/19882906/bf96fc9bb49aab17d0447ee63bf4623a_o2_featured_v2.jpg?output-format=webp",
        offer:"50% OFF",
        ispromted:true,
        title:"New Pizza King",
        ratings:"3.9",
        subtitle:"Pizza,fastfood",
        payment:"₹150 for one",
        timing:"42 min",
        isMaxSafety:true
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/7/3401847/9ee960986dd6e72b60f81b52c39622fa_o2_featured_v2.jpg",
        offer:"50% OFF",
        ispromted:true,
        title:"New Pizza King",
        ratings:"3.9",
        subtitle:"Pizza,fastfood",
        payment:"₹150 for one",
        timing:"42 min",
        isMaxSafety:true
    },
    {
        img:"https://b.zmtcdn.com/data/pictures/6/19416406/f40d5b1d89c82a8cad49b9f0ca91e3c9_o2_featured_v2.jpg",
        offer:"50% OFF",
        ispromted:true,
        title:"New Pizza King",
        ratings:"3.9",
        subtitle:"Pizza,fastfood",
        payment:"₹150 for one",
        timing:"42 min",
        isMaxSafety:true
    },

])
  
return (
    <>
      <div className='w-full h-auto mt-6'>
        <img src="https://b.zmtcdn.com/data/o2_assets/69963815381d03505031ca97cc396b871687856789.png" alt="offer"
        className='w-full h-full' />
      </div>
      <h1 className=' text-2xl font-medium text-grey-800 mt-6 lg:text-4xl'>Nightlife Restaurants in Periyar Nagar, Indira Nagar, Coimbatore</h1>
      <div className='w-full flex flex-wrap items-center justify-between gap-y-12'>
        {cardData.map((cardData)=>{
          return <Card card={cardData}/>
        })}
      </div>
    </>
  )
}

export default NL_Card
