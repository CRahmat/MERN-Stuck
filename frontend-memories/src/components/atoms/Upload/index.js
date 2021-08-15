import React from 'react'
import { Logo } from '../../../assets';
import './upload.scss';

const Upload = ({label,previewTitle, ...rest}) => {
    return (
        <div className="upload-wrapper">
            <p className="input-label">{label}</p>
            <input className="input-file" type="file" {...rest}/>
            <p className="input-label">{previewTitle}</p>
            <img className="preview-upload" src={Logo} alt="Mern Logo"/>
        </div>
    )
}

export default Upload
