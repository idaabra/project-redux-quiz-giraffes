import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

export const StartButton = ({name}) => {
  const dispatch = useDispatch()

  const quiz = useSelector((store) => store.quiz)

  const handleClick = () => {
    return (
      dispatch(quiz.actions.restart())
    )
  }
  
  return (
    <button onClick={handleClick}>
      {name}
    </button>
  )
}