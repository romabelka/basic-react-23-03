import React, {Component} from 'react'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'

class App extends Component {
    render() {
        const { articles } = this.props

        return (
            <div className="App">
                <UserForm />
                <Counter count = {10}/>
                <Filters articles = {articles} />
                <Chart articles = {articles} />
                <ArticleList articles = {articles}/>
            </div>
        )
    }
}

export default App
