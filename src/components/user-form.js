import React, { Component } from 'react'

class UserForm extends Component {
    render() {
        return (
            <div>
                User: <input value = {this.props.value} onChange = {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        this.props.onChange(ev.target.value)
    }
}

export default UserForm