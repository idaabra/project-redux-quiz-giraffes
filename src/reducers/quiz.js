import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  {
    id: 1,
    image: './assets/giraffe_01.jpg',
    questionText: 'How many species of giraffe are there?',
    options: ['one',
    'five',
    'twelve',
    'seven'],
    correctAnswerIndex: 0
  },
  {
    id: 2,
    image: './assets/giraffe_04.jpg',
    questionText: 'Where do giraffes live?',
    options: ['South America',
    'Asia',
    'Europe',
    'Africa'],
    correctAnswerIndex: 3
  },
  {
    id: 3,
    image: './assets/giraffe_03.jpg',
    questionText: 'What kind of terrain do giraffes prefer?',
    options: ['rocky slopes',
    'dense forests',
    'open grassy plains',
    'frosty hillsides'],
    correctAnswerIndex: 2
  },
  {
    id: 4,
    image: './assets/giraffe_05.jpg',
    questionText: "How long is the giraffe's neck?",
    options: ['2.1 m',
    '2.4 m',
    '2.7 m',
    '3 m'],
    correctAnswerIndex: 0
  },
  {
    id: 5,
    image: './assets/giraffe_02.jpg',
    questionText: "Just how long is the giraffe's tongue?",
    options: ['38 cm',
    '53 cm',
    '45 cm',
    '30 cm'],
    correctAnswerIndex: 1
  }
]


const initialState = {
  questions,
  answers: [],
  currentQuesionIndex: 0,
  quizOver: false,
  quizStarted: false,
  hasAnswer: false
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    
    /**
    * Use this action when a user selects an answer to the question.
    * The answer will be stored in the `quiz.answers` state with the
    * following values:
    *
    *    questionId  - The id of the question being answered.
    *    answerIndex - The index of the selected answer from the question's options.
    *    question    - A copy of the entire question object, to make it easier to show
    *                  details about the question in your UI.
    *    answer      - The answer string.
    *    isCorrect   - true/false if the answer was the one which the question says is correct.
    *
    * When dispatching this action, you should pass an object as the payload with `questionId`
    * and `answerIndex` keys. See the readme for more details.
    */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)
      
      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }
      
      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }
      
      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },
    
    /**
    * Use this action to progress the quiz to the next question. If there's
    * no more questions (the user was on the final question), set `quizOver`
    * to `true`.
    *
    * This action does not require a payload.
    */
    goToNextQuestion: (state) => {
      if (state.currentQuesionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuesionIndex += 1
      }
    },
    
    /**
    * Use this action to reset the state to the initial state the page had
    * when it was loaded. Who doesn't like re-doing a quiz when you know the
    * answers?!
    *
    * This action does not require a payload.
    */
    restart: () => {
      return initialState
    },

    startQuiz: (state) => {
      state.quizStarted = true
    },

    hasAnswer: (state) => {
      state.hasAnswer = true
    }

    
  }
})
