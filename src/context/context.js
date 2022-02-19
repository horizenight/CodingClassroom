

import React from 'react'
import { createContext, useContext,useState } from "react";

const AddContext = createContext()
// created a context


export function useLocalContext(){
    return useContext(AddContext);
}
// get the value of context

export function ContextProvider({children}){

    const[createClassDialog,setCreateClassDialog]=useState(false)

    const value = {createClassDialog,setCreateClassDialog}

    return (
        <AddContext.Provider value={value}>
            {children}
        </AddContext.Provider>
    )
}
// to wrap it in context