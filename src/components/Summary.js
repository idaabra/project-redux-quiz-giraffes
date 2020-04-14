import React from 'react'
// import { useSelector } from 'react-redux'
import { StartButton } from 'components/StartButton'

export const Summary = () => {
  return (
    <div>
      <h2>Congrats you got XX points! <span role="img" aria-label="emoji">🎉</span></h2>
      <StartButton name="Try again" />
    </div>
  )
}