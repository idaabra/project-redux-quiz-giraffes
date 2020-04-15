import React from 'react'
import { RestartButton } from 'components/RestartButton'

export const Summary = () => {
  return (
    <div>
      <h2>Congrats you got XX points! <span role="img" aria-label="emoji">🎉</span></h2>
      <RestartButton />
    </div>
  )
}