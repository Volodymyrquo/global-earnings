import React from 'react'
import './assets/scss/styles.scss'
import { GlobalEarningsBtn } from './components'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import {
  ReferralsProgram,
  RewardsProgram,
  TotalsBySections,
} from './components'

const App = ({ path, goToLeaderboard }) => {
  return (
    <>
      <GlobalEarningsBtn path={path} />

      <Switch>
        <Route exact path={'/'}>
          <Redirect to={`${path}/referrals_program`} />
        </Route>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/referrals_program`} />
        </Route>
        <Route
          path={`${path}/referrals_program`}
          render={() => <ReferralsProgram goToLeaderboard={goToLeaderboard} />}
        />
        <Route path={`${path}/rewards_program`} component={RewardsProgram} />
        <Route path={`${path}/statistics`} component={TotalsBySections} />
      </Switch>
    </>
  )
}

export default App
