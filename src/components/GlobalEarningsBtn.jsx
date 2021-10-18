import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import iconRewardsGrey from '../assets/images/sumra/icon-rewards-grey.svg'
import iconStatisticsGrey from '../assets/images/sumra/icon-statistics-grey.svg'
import iconReferralsGrey from '../assets/images/sumra/icon-referrals-grey.svg'

const GlobalEarningsBtn = ({ path }) => {
  const [activeButton, setActiveButton] = useState('/referrals_program')
  const handleOnClick = (urlClicked) => {
    setActiveButton(urlClicked)
  }

  const windowLocation = window.location.pathname
  console.log('##### window location #####  ' + windowLocation)

  return (
    <div className='page-content__wrap'>
      <section className='page-content__global-earnings global-earnings'>
        <Link
          to={`/referrals_program`}
          className={
            windowLocation === `/referrals_program`
              ? 'link-active'
              : 'global-earnings__btn'
          }
          onClick={() => {
            handleOnClick(`/referrals_program`)
          }}>
          <img
            src={iconReferralsGrey}
            alt='referrals'
            className='icon-referrals global-earnings__icon'
          />
          Referrals program
        </Link>
        <Link
          to={`/rewards_program`}
          className={
            windowLocation === `/rewards_program`
              ? 'link-active'
              : 'global-earnings__btn'
          }
          onClick={() => {
            handleOnClick(`/rewards_program`)
          }}>
          <img
            src={iconRewardsGrey}
            alt='referrals'
            className='icon-referrals global-earnings__icon'
          />
          Rewards program
        </Link>
        <Link
          to={`/statistics`}
          className={
            windowLocation === `/statistics`
              ? 'link-active'
              : 'global-earnings__btn'
          }
          onClick={() => {
            handleOnClick(`/statistics`)
          }}>
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
