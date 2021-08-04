import React, { useContext } from 'react'
import 'common-library/src/assets/scss/styles.scss'
import { GlobalEarningsBtn } from './components'
import { Switch, Route } from 'react-router-dom'
import {
  ReferralsProgram,
  RewardsProgram,
  TotalsBySections,
} from './components'

const App = ({ path }) => {
  return (
    <>
      <GlobalEarningsBtn path={path} />

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
