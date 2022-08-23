import React from 'react'
import { UserConsumer } from '../ContextAPI'

const ComponentC = () => {
  return (
    <UserConsumer>
      {value => (
        <h2>{`${value.name} and ${value.description}`}</h2>
      )}
    </UserConsumer>
    )
}

export default ComponentC