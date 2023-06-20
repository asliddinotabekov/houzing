import React from 'react';
import { reducer } from './reducer';

export const FavouriteContext = React.createContext()


const FavouriteProvider = ({children}) => {
    const [state, dispach] =React.useReducer(reducer,{})
  return (
    <FavouriteContext.Provider value={[state, dispach]}>
        {children}
    </FavouriteContext.Provider>
  )
}

export default FavouriteProvider