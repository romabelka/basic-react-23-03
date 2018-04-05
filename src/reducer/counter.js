import { INCREMENT } from '../constants'

export default (state = 42, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1

        default:
            return state
    }
}