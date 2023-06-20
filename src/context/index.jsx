
import React from 'react'
import FavouriteProvider from './favourite'
import PropertiesProvider from './properties'

const Context = ({children}) => {
  return (
    <PropertiesProvider>
      <FavouriteProvider>
      {children}
      </FavouriteProvider>
    </PropertiesProvider>
  )
}

export default Context
