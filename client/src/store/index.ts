import { createStore } from 'vuex'
import reservation from '../store/modules/reservation'
// import navigation from './modules/navigation'
// import userPreferences from './modules/user-preferences'

const store = createStore({
    modules: {
        reservation
    }
})

export default store