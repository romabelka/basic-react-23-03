import React, {Component} from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'

class App extends Component {
    render() {
        return (
            <div className="App">
                <UserForm />
                <Counter count = {10}/>
                <Filters articles = {[]} />
                <ArticleList />
            </div>
        )
    }
}

export default App
