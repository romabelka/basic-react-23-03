import React, { PureComponent } from 'react'
import CommentList from './comment-list'

class Article extends PureComponent {
    state = {
        error: null
    }

    componentDidCatch(error) {
        console.log('---', 'some error', error)
        this.setState({ error })
    }

    render() {
        const { article, isOpen, toggleOpen } = this.props
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
        if (this.state.error) return <h2>Some error</h2>
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