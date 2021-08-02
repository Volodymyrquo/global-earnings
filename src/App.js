import React, { useContext } from 'react'
import './assets/scss/main.scss'
import { GlobalEarningsBtn } from './components'
import { Context } from './context/context'
import { HashRouter as Router } from 'react-router-dom'
const App = () => {
  const { page } = useContext(Context)
  return (
    <Router>
      <GlobalEarningsBtn />
      {page}
    </Router>
  )
}

export default App
