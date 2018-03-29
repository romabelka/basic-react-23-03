import React, { Component } from 'react'
import Article from './article'

class ArticleList extends Component {
    state = {
        openArticleId: null
    }

    render() {
        return (
            <ul>
                {this.getArticles()}
            </ul>
        )
    }

    getArticles() {
        return this.props.articles.map(article => (
            <li key = {article.id}>
                <Article article = {article}
                         isOpen = {article.id === this.state.openArticleId}
                         toggleOpen = {this.toggleArticle(article.id)}
                />
            </li>
        ))
    }

    toggleArticle = openArticleId => () => this.setState({ openArticleId })
}

export default ArticleList