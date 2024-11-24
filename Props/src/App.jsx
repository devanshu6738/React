import './App.css'
import Product from './components/product'



function App({shoesData}) {
  // let a=34;
  // let b=56;
  return(
    <div>
      {/* {
        shoesData.map((data)=>{
         return  <Product title={data.title} price= {data.price}/>
        })
      } */}
      {
        shoesData.map((data)=><Product key={data.id} title={data.title} price= {data.price}/>)
      }
    </div>
  )
}


export default App
