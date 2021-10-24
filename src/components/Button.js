import React from 'react'
import PropTypes from 'prop-types'

function Button({color, text, onClick}) {

    return (
        <div>
            <button 
            onClick={onClick}
            style={{backgroundColor: color}}
            className='btn'>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Add'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}
export default Button
