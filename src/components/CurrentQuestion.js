import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Progress } from './Progress'
import './quiz.css'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  const dispatch = useDispatch()
  
  
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  
  const handleClick = (index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
  }
  
  return (
    <main className="currentQuestion">
      <img src={question.image} alt="Giraffe" />
      <h1 className="questionText">Question: {question.questionText}</h1>
      <div className="answerContainer">
      {question.options.map((answer, index) => {
        return (
          
          <button className="answerOption" 
          key={index}
          onClick={() => handleClick(index)}>
          {answer}
          </button>
          
          )
        })}
        </div>
        <button className="moveOn" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
        NEXT
        </button>
        <Progress/>
      </main>
      )
    }
    
    
    
    
    
    
    
    
    
    