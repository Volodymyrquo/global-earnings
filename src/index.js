import React from 'react'
import { Provider } from './context/context'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'

const index = (props) => {
  return (
    <Router>
      <Provider>
        <App {...props} />
      </Provider>
    </Router>
  )
}

export default index
