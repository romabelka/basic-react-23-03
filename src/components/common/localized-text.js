import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../lang-context'

function LocalizedText(props) {
    if (typeof props.children !== 'string') {
        console.warn('string child expected')
        return props.children
    }

    return (
        <Consumer>
            {
                dictionary => dictionary[props.children] || props.children
            }
        </Consumer>
    )
}

LocalizedText.propTypes = {
    children: PropTypes.string
}

export default LocalizedText