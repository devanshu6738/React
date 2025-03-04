import React, { useEffect, useState } from 'react'
import OnYourMind from './OnYourMind'
import TopRes from './TopRes'
import OnlineFood from './OnlineFood';


function Body() {
  const [topResdata,SettopResdata]=useState([]);
  const[onYourmindData,SetonYourMindData]=useState([]);
  const[topFood,SettopFood]=useState([])
 async function FetchData(){
         const data=await fetch("https://chocolate-hedy-93.tiiny.site/swiggydata.json")
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
