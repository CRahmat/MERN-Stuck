import React from 'react'
import './register.scss'
import { RegisterBackground } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Register = () => {
    return (
        <div className="container">
            <div className="image">
                <img src={RegisterBackground} className="register-image"  alt="Login"/>
            </div>
            <div className="form-register">
                <h1 className="title">Pendaftaran</h1>
                <Input label="Full Name" placeholder="Massukan Full Name..."/>
                <Gap height={18}/>
                <Input label="Email" placeholder="Massukan Email..." type="Email"/>
                <Gap height={18}/>
                <Input label="Password" placeholder="Massukan Password..." type="Password"/>
                <Gap height={30}/>
                <Button title="Daftar"/>
                <Link title="Kembali Ke Login" />
            </div>
        </div>
    )
}

export default Register
