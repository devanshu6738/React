import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";


let shoesData=[
    {
      id:1,
      title:"NIke Shoes",
      price:5999,
    },
    {
        id:2,
      title:"addidas Shoes",
      price:6999
    },{
        id:3,
      title:"air jordan",
      price:9999
    }
  ]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App shoesData={shoesData}/>);