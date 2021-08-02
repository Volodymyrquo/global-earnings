import React, { useContext } from 'react'
import './assets/scss/main.scss'
import { GlobalEarningsBtn } from './components'
import { Context } from './context/context'
import { Switch, useRouteMatch, Route } from 'react-router-dom'
import {
  ReferralsProgram,
  RewardsProgram,
  TotalsBySections,
} from './components'

const App = () => {
  const { path } = useRouteMatch()

  console.log('##### path ' + path)

  return (
    <>
      <GlobalEarningsBtn />

      <Switch>
        <Route
          path={`${path}/referrals_program`}
          component={ReferralsProgram}
        />
        <Route path={`${path}/rewards_program`} component={RewardsProgram} />
        <Route path={`${path}/statistics`} component={TotalsBySections} />
      </Switch>
    </>
  )
}

export default App
