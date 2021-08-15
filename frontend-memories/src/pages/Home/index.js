import React from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory();
    return (
        <div className="home-wrapper">
            <div className="create-wrapper">
            <Button title="Buat Blog" onClick={() => history.push('./create')}/>
            </div>
            <div className="content-wrapper">
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
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
