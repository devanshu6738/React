import React, { useContext, useEffect, useState } from 'react'
import OnYourMind from './OnYourMind'
import TopRes from './TopRes'
import OnlineFood from './OnlineFood';
import { Coordinate } from './utils/contextApi';


function Body() {
  const [topResdata,SettopResdata]=useState([]);
  const[onYourmindData,SetonYourMindData]=useState([]);
  const[topFood,SettopFood]=useState([])
  const{cord:{lat,lng}}=useContext(Coordinate)
  console.log(lat,lng)
 async function FetchData(){
         const data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
         const result=await data.json();
         
        //  console.log(result.data.cards[].card.card);
         SettopResdata(result.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
         SetonYourMindData(result.data.cards[0].card.card.imageGridCards.info)
        //  console.log(result.data.cards[0].card.card.imageGridCards)
         // Setdata(result.data.cards[0].card.card.imageGridCards.info)
         
       }
       useEffect(()=>{
         FetchData();
       },[lat,lng])
  return(
    <>
    <OnYourMind data={onYourmindData}/>
    <TopRes data={topResdata}/> 
    <OnlineFood data={topResdata}/>
    </>
  )
    
}

export default Body
