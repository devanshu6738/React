function Allcards({data}){
  return(
    <div className="flex flex-wrap gap-20 justify-center mt-8">
      {data.map(singleItem =>(
        <div className="w-[350px] min-h-[420px] bg-[#193351] p-4 rounded-lg"
        key={singleItem.id}>
          <img src={singleItem.thumbnail} alt="" />
          <p className="text-xl font-semibold">{singleItem.title}</p>
          <p className="text-[#CDCDCD]">{singleItem.price}$</p>
          <p className="w-300px">{singleItem.description}</p>
        </div>
      ))}
      
    </div>
  )
}
export default Allcards