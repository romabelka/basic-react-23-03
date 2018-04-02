import React, { Component } from 'react'
//import {findDOMNode} from 'react-dom'
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
                         toggleOpen = {toggleItem}
                         ref = {this.setListElementRef}
                />
            </li>
        ))
    }

    setListElementRef = _ => {
        //console.log('---', listElement, findDOMNode(listElement))
    }
}

export default accordion(ArticleList)