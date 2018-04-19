import React, { Component } from 'react'
import MenuItem from './menu-item'

class Menu extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <h3>Main menu:</h3>
                {this.props.children}
            </div>
        )
    }
}

export { MenuItem }
export default Menu