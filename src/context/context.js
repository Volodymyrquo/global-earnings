import React, { createContext, useReducer } from 'react'
import { initialState } from './contextReducer'
import {
  ReferralsProgram,
  RewardsProgram,
  TotalsBySections,
} from '../components'
import contextReducer from './contextReducer'
export const Context = createContext(initialState)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState)

  const setPage = (id) =>
    dispatch({
      type: 'SET_PAGE',
      payload: id,
    })

  const pages = {
    referralsProgram: <ReferralsProgram />,
    rewardsProgram: <RewardsProgram />,
    statisticsTable: <TotalsBySections />,
  }
  const { pageId } = state

  const page = pages[state.pageId]

  return (
    <Context.Provider
      value={{
        setPage,
        page,
        pageId,
      }}>
      {children}
    </Context.Provider>
  )
}
