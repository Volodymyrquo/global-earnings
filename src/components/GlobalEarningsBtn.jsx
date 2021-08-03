import React, { useEffect, useContext } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Context } from '../context/context'
import iconRewardsGrey from '../assets/images/sumra/icon-rewards-grey.svg'
import iconStatisticsGrey from '../assets/images/sumra/icon-statistics-grey.svg'
import iconReferralsGrey from '../assets/images/sumra/icon-referrals-grey.svg'

const GlobalEarningsBtn = ({ path }) => {
  const { setPage, pageId } = useContext(Context)
  return (
    <div className='page-content__wrap'>
      <section className='page-content__global-earnings global-earnings'>
        <Link
          to={`${path}/referrals_program`}
          /*  onClick={() => {
            setPage('referralsProgram')
          }} */
          className={
            pageId === 'referralsProgram'
              ? 'link-active'
              : 'global-earnings__btn'
          }>
          <img
            src={iconReferralsGrey}
            alt='referrals'
            className='icon-referrals global-earnings__icon'
          />
          Referrals program
        </Link>
        <Link
          to={`${path}/rewards_program`}
          className={
            pageId === 'rewardsProgram' ? 'link-active' : 'global-earnings__btn'
          }
          /*           onClick={() => {
            setPage('rewardsProgram')
          }}
 */
        >
          <img
            src={iconRewardsGrey}
            alt='referrals'
            className='icon-referrals global-earnings__icon'
          />
          Rewards program
        </Link>
        <Link
          to={`${path}/statistics`}
          className={
            pageId === 'statisticsTable'
              ? 'link-active'
              : 'global-earnings__btn'
          }
          /*           onClick={() => {
            setPage('statisticsTable')
          }}
 */
        >
          <img
            src={iconStatisticsGrey}
            alt='referrals'
            className='icon-referrals global-earnings__icon'
          />
          Statistic
        </Link>
      </section>
    </div>
  )
}

export default GlobalEarningsBtn
