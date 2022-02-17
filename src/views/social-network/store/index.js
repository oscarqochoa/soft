import Vue from 'vue'
import Vuex from 'vuex'
import Test from '../views/test/test.store'
import AnswersGuide from './anwersGuide'

Vue.use(Vuex)

export default {
  SocialNetworkTest: Test,
  SocialNetworkAnswerGuide: AnswersGuide,
}
