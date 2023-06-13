import React from 'react';
import { reducer } from './reducer';

const PropertiesContext = React.createContext()


const PropertiesProvider = ({children}) => {
    const [state, dispach] =React.useReducer(reducer,[])
  return (
    <PropertiesContext.Provider value={[state, dispach]}>
        {children}
    </PropertiesContext.Provider>
  )
}

export default PropertiesProvider