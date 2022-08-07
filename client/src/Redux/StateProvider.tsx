import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext({} as any)

type StateProp = {
    reducer: any,
    initialState: any,
    children: any
}

export const StateProvider : React.FC<StateProp> = ({reducer, initialState, children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)