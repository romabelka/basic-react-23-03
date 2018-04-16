import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import ArticleList from '../article-list'
import Article from '../article'

class ArticlesPage extends Component {
    static propTypes = {

    }

    render() {
        console.log('---', 'article list match', this.props.match)
        return (
            <Fragment>
                <ArticleList />
                <Route path = {`${this.props.match.path}/:id`} children = {this.getArticle} />
            </Fragment>
        )
    }

    getArticle = ({ match }) => {
        if (!match) return <h1>Select an article</h1>
        return <Article id = {match.params.id} isOpen key = {match.params.id} />
    }
}

export default ArticlesPage