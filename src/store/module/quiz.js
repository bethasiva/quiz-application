import axios from 'axios'
import storeFunctionNames from '@/constants/storeFunctionNames.js'

const { ADD_QUIZES, SELECTED_OPTION_ANSWER, VERIFY_ANSWER, RESET_STATE } = storeFunctionNames
const [SUCCESS_ALERT, NO_OPTION_ALERT, WRONG_ANSWER_ALERT] = [
  'WOW!! Your answer is correct.',
  'Please select the option.',
  'Ups!! Your answer is wrong.'
]
const QUIZES_DATA_URL = '/data/quizes.json'

const state = () => ({
  quizes: [],
  selectedOptionAnswer: null,
  showAlert: false,
  alertMessage: '',
  score: 0,
  user: 'Player'
})

const mutations = {
  [ADD_QUIZES]: (state, payload) => {
    if (Array.isArray(payload.quizes) && payload.quizes.length) {
      state.quizes = payload.quizes
    }
  },

  [SELECTED_OPTION_ANSWER]: (state, payload) => {
    state.selectedOptionAnswer = payload.selectedOptionAnswer
  },

  [VERIFY_ANSWER]: (state, payload) => {
    const quizData = state.quizes.find((quiz) => {
      return quiz.id === payload.id
    })

    if (quizData && quizData.correct_answer === state.selectedOptionAnswer) {
      state.alertMessage = SUCCESS_ALERT
      state.score += 1000
    } else if (!state.selectedOptionAnswer) {
      state.alertMessage = NO_OPTION_ALERT
    } else {
      state.alertMessage = WRONG_ANSWER_ALERT
    }
    state.showAlert = true
  },

  [RESET_STATE]: (state) => {
    state.alertMessage = ''
    state.showAlert = false
    state.selectedOptionAnswer = null
    state.score = 0
  }
}

const actions = {
  [ADD_QUIZES]: async ({ commit }) => {
    const { data } = await axios.get(QUIZES_DATA_URL)
    if (Array.isArray(data) && data.length) {
      commit(ADD_QUIZES, { quizes: data })
    }
  },

  [SELECTED_OPTION_ANSWER]: ({ commit }, { payload }) => {
    commit(SELECTED_OPTION_ANSWER, payload)
  },

  [VERIFY_ANSWER]: ({ commit }, { payload }) => {
    commit(VERIFY_ANSWER, payload)

    setTimeout(() => {
      commit(RESET_STATE)
    }, 3000)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
