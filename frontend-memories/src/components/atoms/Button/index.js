import React from 'react'
import './button.scss'
const Button = ({title, ...rest}) => {
    return (
        <div>
            <button className="btn" {...rest}>{title}</button>
        </div>
    )
}

export default Button
