import React from 'react'
import { Provider } from './context/context'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

const index = (props) => {
  return (
    <Router>
      <Provider>
        <div style={{ padding: '30px ' }}>
          <App {...props} />
        </div>
      </Provider>
    </Router>
  )
}

export default index
