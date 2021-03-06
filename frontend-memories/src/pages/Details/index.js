import React from 'react'
import { Logo } from '../../assets'
import './details.scss'

function Details() {
    return (
        <div className="details-blog">
           <h1 className="create-post">Detail Post</h1>
           <p className="create-post-desc">Judul Post</p>
           <img className="image-thumb" src={Logo} alt="Mern Logo"/>
           <div className="content-details">
                <p className="author">Author - Date Post</p>
                <p className="content-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}

export default Details
