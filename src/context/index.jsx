
import React from 'react'
import PropertiesProvider from './properties'

const Context = ({children}) => {
  return (
    <PropertiesProvider>
      {children}
    </PropertiesProvider>
  )
}

export default Context
