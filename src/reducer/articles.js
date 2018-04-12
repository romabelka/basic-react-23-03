import { Record } from 'immutable'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS } from '../constants'
import { arrToMap } from './utils'

const ArticleRecord = Record({
    id: null,
    title: null,
    text: null,
    date: null,
    loading: false,
    comments: []
})

const ReducerRecord = Record({
    entities: arrToMap([], ArticleRecord),
    loading: false,
    loaded: false
})

export default (state = ReducerRecord(), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case DELETE_ARTICLE:
            return state.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return state.updateIn(['entities', payload.articleId, 'comments'], (comments) => comments.concat(randomId))

        case LOAD_ALL_ARTICLES + START:
            return state.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return state
                .set('entities', arrToMap(response, ArticleRecord))
                .set('loading', false)
                .set('loaded', true)

        case LOAD_ARTICLE + START:
            return state.setIn(['entities', payload.id, 'loading'], true)

        case LOAD_ARTICLE + SUCCESS:
            return state.setIn(['entities', payload.response.id], ArticleRecord(payload.response))

        default:
            return state
    }
}