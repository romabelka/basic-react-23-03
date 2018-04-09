import { normalizedComments } from '../fixtures'
import {  } from '../constants'

const defaultComments = normalizedComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (commentsState = defaultComments, action) => {
    const { type } = action

    switch (type) {

        default:
            return commentsState
    }
}