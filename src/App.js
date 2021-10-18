import React from 'react'
import './assets/scss/styles.scss'
import { GlobalEarningsBtn } from './components'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import {
  ReferralsProgram,
  RewardsProgram,
  TotalsBySections,
} from './components'

const App = ({ path, goToLeaderboard, handleOnClick, Rewards }) => {
  return (
    <div style={{ padding: '30px', overflow: 'auto' }}>
      <GlobalEarningsBtn path={path} />

      <Switch>
        <Route
          path={`/referrals_program`}
          render={() => (
            <ReferralsProgram
              goToLeaderboard={goToLeaderboard}
              handleOnClick={handleOnClick}
            />
          )}
        />
        <Route
          path={`/rewards_program`}
          render={() => <RewardsProgram Rewards={Rewards} />}
        />
        <Route path={`/statistics`} render={() => <TotalsBySections />} />
      </Switch>
    </div>
  )
}

export default App
