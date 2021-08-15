import React from 'react'
import './login.scss'
import { LoginBackground } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { useHistory } from 'react-router'

const Login = () => {
    const history = useHistory();
    return (
        <div className="container">
            <div className="image">
                <img src={LoginBackground} className="login-image" alt="Login" />
            </div>
            <div className="form-login">
                <h1 className="title-login">Login</h1>
                <Input label="Email" placeholder="Massukan Email..." type="email"/>
                <Gap height={18}/>
                <Input label="Password" placeholder="Massukan Password..." type="password"/>
                <Gap height={30}/>
                <Button title="Login" onClick={() => history.push('./')}/>
                <Gap height={40}/>
                <Link title="Belum punya akun? Daftar" onClick={() => history.push('./register')}/>
            </div>
        </div>
    )
}

export default Login
