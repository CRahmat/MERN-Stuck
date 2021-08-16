import React, { useEffect, useState } from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

const Home = () => {
    const [Contents, setContents] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:4000/v1/contents/data')
        .then(result => {
            const dataContent = result.data;
            setContents(dataContent.data);
        }).catch(
            err => {
                console.log('error:', err);
        })
    })
    const history = useHistory();
    return (
        <div className="home-wrapper">
            <div className="create-wrapper">
            <Button title="Buat Blog" onClick={() => history.push('./create')}/>
            </div>
            <div className="content-wrapper">
                {
                    Contents.map(content => {
                        return <BlogItem key={content._id} image={`http://localhost:4000/${content.image}`}
                        title={content.title}
                        fullName={content.author.fullName}
                        date={content.createdAt}
                        content={content.content} />
                    })
                }
            </div>
            <hr />
            <div className="pagination">
                <Button title="Prev"/>
                <Gap width={10} />
                <Button title="Next"/>
            </div>
            
        </div>
    )
}

export default Home
