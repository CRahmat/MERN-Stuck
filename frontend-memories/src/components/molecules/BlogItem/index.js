import React from 'react'
import './blogItem.scss';
import { useHistory } from 'react-router';

const BlogItem = (props) => {
    const history = useHistory();
    const {image, title, date, fullName, content} = props;
    return (
        <div className="blog-item" onClick={() => history.push('./details') }>
            <img className="image-thumb" src={image} alt="Mern Application"/>
            <div className="content-details">
                <p className="title">{title}</p>
                <p className="author">{fullName} - {date}</p>
                <p className="content-body">{content}</p>
            </div>
        </div>
    )
}

export default BlogItem
