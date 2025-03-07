import React, { useEffect, useState } from 'react'
import OnYourMind from './OnYourMind'
import TopRes from './TopRes'
import OnlineFood from './OnlineFood';


function Body() {
  const [topResdata,SettopResdata]=useState([]);
  const[onYourmindData,SetonYourMindData]=useState([]);
  const[topFood,SettopFood]=useState([])
 async function FetchData(){
         const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
         const result=await data.json();
         console.log(result.data.cards);
         
         SettopResdata(result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
         SetonYourMindData(result.data.cards[0].card.card.imageGridCards.info)
        //  console.log(result.data.cards[0].card.card.imageGridCards)
         // Setdata(result.data.cards[0].card.card.imageGridCards.info)
       }
       useEffect(()=>{
         FetchData();
       },[])
  return(
    <>
    <OnYourMind data={onYourmindData}/>
    <TopRes data={topResdata}/> 
    <OnlineFood data={topResdata}/>
    </>
  )
    
}

export default Body
