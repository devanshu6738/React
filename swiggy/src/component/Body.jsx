import React, { useContext, useEffect, useState } from 'react'
import OnYourMind from './OnYourMind'
import TopRes from './TopRes'
import OnlineFood from './OnlineFood';
import { Coordinate } from './utils/contextApi';


function Body() {
  const [topResdata,SettopResdata]=useState([]);
  const[onYourmindData,SetonYourMindData]=useState([]);
  const[topFood,SettopFood]=useState([])
  const[topResTitle,SetTopResTitle]=useState("")
  const{cord:{lat,lng}}=useContext(Coordinate)
  const[service,setService]=useState({})
 
 async function FetchData(){
         const data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
         const result=await data.json();
         
         SetTopResTitle(result.data.cards[0].card.card.title);
         console.log(result.data.cards)
         setService(result.data)
         SettopResdata(result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
         SetonYourMindData(result.data.cards[0].card.card.imageGridCards.info)
        //  console.log(result.data.cards[0].card.card.imageGridCards)
         // Setdata(result.data.cards[0].card.card.imageGridCards.info)
         
       }
       useEffect(()=>{
         FetchData();
       },[lat,lng])
       if(service.communication){
        return <h1>Location unservicable</h1>
       }
  return(
    <>
    <OnYourMind data={onYourmindData} title={topResTitle}/>
    <TopRes data={topResdata}/> 
    <OnlineFood data={topResdata}/>
    </>
  )
    
}

export default Body
