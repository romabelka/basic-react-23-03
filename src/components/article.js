import React, { PureComponent } from 'react'
import CommentList from './comment-list'

class Article extends PureComponent {
    render() {
        const { article, isOpen, toggleOpen } = this.props
        console.log('---', 'rendering article')
        return (
            <div>
                <h2>{article.title}</h2>
                <button onClick = {() => toggleOpen(article.id)}>{isOpen ? 'close' : 'open'}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null

        return (
            <section>
                {article.text}
                <CommentList comments={article.comments}/>
            </section>
        )
    }
}

export default Article