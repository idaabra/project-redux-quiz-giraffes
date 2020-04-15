import React from 'react'
import { useSelector } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const Score = () => {
  
  return (
    <div>
      <h2>Congrats you got XX points! <span role="img" aria-label="emoji">🎉</span></h2>
    </div>
  )
}