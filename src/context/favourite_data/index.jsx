import React from 'react';
import { reducer } from './reducer';

export const FavouriteDataContext = React.createContext()


const FavouriteDataProvider = ({children}) => {
    const [state, dispach] =React.useReducer(reducer,{})
  return (
    <FavouriteDataContext.Provider value={[state, dispach]}>
        {children}
    </FavouriteDataContext.Provider>
  )
}

export default FavouriteDataProvider