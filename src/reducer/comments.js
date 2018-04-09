import { normalizedComments as defaultComments } from '../fixtures'
import {  } from '../constants'

export default (commentsState = defaultComments, action) => {
    const { type } = action

    switch (type) {

        default:
            return commentsState
    }
}