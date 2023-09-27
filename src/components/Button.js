import PropTypes from 'prop-types';
import React from 'react'

function Button({ text, buttonClass, onClick }) {

    return (
        <div>
            <button
                className={buttonClass} 
                onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    buttonClass: PropTypes.string,
    onClick: PropTypes.func
}

export default Button