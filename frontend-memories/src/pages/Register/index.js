import React from 'react'
import './register.scss'
import { RegisterBackground } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { useHistory } from 'react-router'

const Register = () => {
    const history = useHistory();
    return (
        <div className="container">
            <div className="image">
                <img src={RegisterBackground} className="register-image"  alt="Login"/>
            </div>
            <div className="form-register">
                <h1 className="title-register">Pendaftaran</h1>
                <Input label="Full Name" placeholder="Massukan Full Name..."/>
                <Gap height={18}/>
                <Input label="Email" placeholder="Massukan Email..." type="Email"/>
                <Gap height={18}/>
                <Input label="Password" placeholder="Massukan Password..." type="Password"/>
                <Gap height={30}/>
                <Button title="Daftar"/>
                <Link title="Kembali Ke Login" onClick={() => history.push('./login')}/>
            </div>
        </div>
    )
}

export default Register
