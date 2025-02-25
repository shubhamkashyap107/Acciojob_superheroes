import { createContext, useContext } from "react";
import React from 'react'

export const userKaContext = createContext()

const Global = ({children}) => {
  return (
    <userKaContext.Provider value={{status : 200}}>
        {children}
    </userKaContext.Provider>
  )
}


export const useGLobal = () => {
    return useContext(userKaContext)
}

export default Global