import React from 'react'
import { Provider } from './context/context'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'

const index = () => {
  return (
    <Router>
      <Provider>
        <App />
      </Provider>
    </Router>
  )
}

export default index
