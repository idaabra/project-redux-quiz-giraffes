import React from 'react'
import { StartButton } from 'components/StartButton'
import './quiz.css' 

export const StartingPage = () => {

  return (
    
    <div mpo>
      <h1 className="welcomeGreeting">Welcome to the quiz</h1>
      <StartButton className="startButton"/>
    </div>
    
  )
}