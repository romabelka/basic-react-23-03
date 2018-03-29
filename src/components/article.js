import React, { Component } from 'react'

class Article extends Component {
    render() {
        const { article, isOpen, toggleOpen } = this.props
        return (
            <div>
                <h2>{article.title}</h2>
                <button onClick = {toggleOpen}>{isOpen ? 'close' : 'open'}</button>
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
            </section>
        )
    }
}

export default Article