import React, {Component} from 'react'
import ArticleList from './components/article-list'
import Chart from './components/chart'

class App extends Component {
    render() {
        const { articles } = this.props
        return (
            <div className="App">
                <Chart articles = {articles} />
                <ArticleList articles = {articles}/>
            </div>
        )
    }
}

export default App
