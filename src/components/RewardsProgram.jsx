import React from 'react'
const RewardsProgram = ({ Rewards }) => {
  const rewardsStyle = {
    color: 'blue',
    fontWeight: 'bold',
  }
  return <Rewards />
  /*  return (
    <div
      className='global-earnings-main'
      style={{ textAlign: 'center', marginTop: '25%' }}>
      <h1 style={rewardsStyle}>
        {' '}
        Hello from Rewards Program in the npm package{' '}
      </h1>
      <h2 style={rewardsStyle}> We are waiting for design </h2>
    </div>
  ) */
}

export default RewardsProgram
