import React from 'react'
import { useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <main>
      <h1>Question: {question.questionText}</h1>

      {question.options.map((answer, index) => (
        <button key={index}>
          {answer}
        </button>
      ))}
    </main>
  )
}

