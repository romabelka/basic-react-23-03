import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import accordion from '../../decorators/accordion'
import { filtratedArticles, articlesLoadingSelector } from '../../selectors'
import { loadAllArticles } from '../../ac'
import Loader from '../common/loader'

export class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,

        //from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    };

    componentDidMount() {
        const { fetchData } = this.props
        if (fetchData) fetchData()
    }

    render() {
        if (this.props.loading) return <Loader />
        return (
            <ul>
                {this.getArticles()}
            </ul>
        )
    }

    getArticles() {
        const { articles, openItemId, toggleItem } = this.props
        return articles.map(article => (
            <li key = {article.id} className = "test--article-list__item">
                <NavLink to = {`/articles/${article.id}`} activeStyle = {{ color: 'red' }}>{article.title}</NavLink>
            </li>
        ))
    }
}

export default connect(state => {
    console.log('---', 'connect')
    return {
        articles: filtratedArticles(state),
        loading: articlesLoadingSelector(state)
    }
}, { fetchData: loadAllArticles })(accordion(ArticleList))