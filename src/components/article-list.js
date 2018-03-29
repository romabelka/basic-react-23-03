import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    render() {
        return (
            <ul>
                {this.getArticles()}
            </ul>
        )
    }

    getArticles() {
        const { articles, openItemId, toggleItem } = this.props
        return articles.map(article => (
            <li key = {article.id}>
                <Article article = {article}
                         isOpen = {article.id === openItemId}
                         toggleOpen = {toggleItem(article.id)}
                />
            </li>
        ))
    }
}

export default accordion(ArticleList)