function Allcards({data}){
  return(
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px",marginTop:"20px",justifyContent:"center"}}>
      {data.map(singleItem =>(
        <div
        key={singleItem.id}
         style={{
          backgroundColor:"black",
          width:"350px",
          height:"450px",
          color:"white",
          padding:"20px"
        }}>
          <img src={singleItem.thumbnail} alt="" />
          <p>{singleItem.title}</p>
          <p>{singleItem.price}$</p>
          <p>{singleItem.description}</p>
        </div>
      ))}
      
    </div>
  )
}
export default Allcards