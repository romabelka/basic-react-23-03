import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'
import ArticleList from './components/routes/articles'
import CommentsPage from './components/routes/comments-page'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import Menu, { MenuItem } from './components/menu'
import LangProvider from './components/common/lang-provider'

class App extends Component {
    static childContextTypes = {
        username: PropTypes.string,
        store: PropTypes.object
    }

    state = {
        user: '',
        language: 'ru'
    }

    getChildContext() {
        return {
            username: this.state.user
        }
    }

    onUserChange = (user) => this.setState({ user })
    changeLanguage = language => ev => this.setState({ language })

    render() {
        console.log('---', 1)
        return (
            <LangProvider language={this.state.language}>
                <div className="App">
                    <ul>
                        <li onClick={this.changeLanguage('en')}>English</li>
                        <li onClick={this.changeLanguage('ru')}>Russian</li>
                    </ul>
                    <Menu>
                        <MenuItem to="/counter">counter</MenuItem>
                        <MenuItem to="/filters">filters</MenuItem>
                        <MenuItem to="/articles">articles</MenuItem>
                        <MenuItem to="/comments">comments</MenuItem>
                    </Menu>

                    <UserForm value={this.state.user} onChange={this.onUserChange}/>

                    <Switch>
                        <Redirect exact from="/" to="/articles"/>
                        <Route path="/counter" component={Counter} exact/>
                        <Route path="/filters" component={Filters}/>
                        <Route path="/articles/new" render={() => <h1>New article page</h1>}/>
                        <Route path="/articles" component={ArticleList}/>
                        <Route path="/comments" component={CommentsPage}/>
                        <Route path="*" render={() => <h1>Not found page</h1>}/>
                    </Switch>
                </div>
            </LangProvider>
        )
    }
}

export default App
