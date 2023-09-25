import PropTypes from 'prop-types';
import React from 'react'

function Button({ text, color, onClick }) {

    return (
        <div>
            <button 
                onClick={onClick}
                style={{ backgroundColor: color }}>
                {text}
            </button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button