import { use, useState } from 'react'
import CountContext from '../utils/CountContext'
import Count from '../component/Count'



function App() {
    const[Countdata,SetCountdata]=useState(1)
    return(
        <CountContext.Provider value={{Countdata,SetCountdata}}>
            <Count/>
        </CountContext.Provider>
    )
}

export default App
