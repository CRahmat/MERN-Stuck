import React from 'react'
import './textarea.scss'

const TextArea = ({label, ...rest}) => {
    return (
        <div className="text-area-wrapper">
            <p className="text-area-label">{label}</p>
            <textarea className="text-area" {...rest}/>
        </div>
    )
}

export default TextArea
