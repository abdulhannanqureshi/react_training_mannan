import React from 'react'
import ComponentA from './ComponentA'
import { UserProvider } from '../ContextAPI'

const Parent = () => {
  return (
    <UserProvider value={{name: 'My name is khan', description: 'I am front end developer'}}>
      <ComponentA />
    </UserProvider>
  )
}

export default Parent