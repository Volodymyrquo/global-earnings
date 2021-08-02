import React from 'react'
import { Provider } from './context/context'
import App from './App'

const index = () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}

export default index
