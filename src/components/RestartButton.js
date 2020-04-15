import React from 'react';
import { useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

export const RestartButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    return (
      dispatch(quiz.actions.restart())
    )
  }

  return (
    <button
      onClick={handleClick}
      className="moveOn"
      type="button">
      Try again
    </button>
  )
}