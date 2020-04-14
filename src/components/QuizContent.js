import React from 'react'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { StartingPage } from 'components/StartingPage'
import { Summary } from 'components/Summary'

export const QuizContent = () => {

  return (
    <div>
      <StartingPage />
      <CurrentQuestion />
      <Summary /> 
    </div>
  )
}