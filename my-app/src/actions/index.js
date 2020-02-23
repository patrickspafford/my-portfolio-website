import { toggleDarkMode } from '../components/Header';

const initialState = {
    isDarkMode: false
}

function rootReducer(state = initialState, action) {
    if (action.type === toggleDarkMode) {
        state.isDarkMode = !state.isDarkMode
    }
    return state
}

export default rootReducer;