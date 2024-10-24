import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const UtilsContext = createContext(null) 


export const UtilsContextProvider=({ children }) => {
    const [isSidebar,setIsSidebar] = useState(false)
    const [mobileShow,setMobileShow] = useState(false)

    return <UtilsContext.Provider value={{isSidebar,setIsSidebar,mobileShow,setMobileShow}}>
        { children }
    </UtilsContext.Provider>
}
export const useUtils = () => {
    const utilsContext = useContext(UtilsContext)

    if(!utilsContext){
        return null
    }
    return utilsContext
}