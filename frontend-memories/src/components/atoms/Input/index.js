import React from 'react'
import './input.scss'

const Input = ({label, ...rest}) => {
    return (
        <div className="input-wrapper">
            <p className="input-label">{label}</p>
            <input className="input-form" type="text" {...rest}/>
        </div>
    )
}

export default Input
