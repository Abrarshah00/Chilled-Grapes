import React from 'react'
import '../styles/button.styles.scss'

const Button = ({ text }) => {
    return (
        <div className='custom-button'>{text}</div>
    )
}

export default Button