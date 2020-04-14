import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  const dispatch = useDispatch()
  const [userindex, setUserindex] = useState(7)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const handleClick = (index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
  }

  return (
    <main>
      <h1>Question: {question.questionText}</h1>

      {question.options.map((answer, index) => {


        return (
          <button key={index}
            onClick={() => handleClick(index)}>
            {answer}
          </button>
        )
      })}
      <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
        NEXT
        </button>
        </main>)}
        








