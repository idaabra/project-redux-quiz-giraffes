import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StartButton } from 'components/StartButton'

export const StartingPage = () => {
  const dispatch = useDispatch()

  // dispatch(
    
  // )
  
  return (
    <div>
      <h1>Welcome to the quiz</h1>
      <StartButton name='Start the quiz' />
    </div>
  )
}