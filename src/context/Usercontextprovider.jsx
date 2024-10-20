import React, { useState } from 'react'
import Usercontext from './Usercontext'

const Usercontextprovider = ({children}) => {
    const [data,setdata] = useState("")
    const [addtocart,Setaddtocart] = useState([])
  return (
    <Usercontext.Provider value={{data,setdata,addtocart,Setaddtocart}}>
      {children}
    </Usercontext.Provider>
  )
}

export default Usercontextprovider