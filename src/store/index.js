import { createStore, createLogger } from 'vuex'
import quiz from './module/quiz'

// const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    quiz
  }
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
