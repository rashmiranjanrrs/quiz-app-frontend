import React, {useState, useEffect} from 'react';
import {APIN} from '../../api-service';
import { useCookies } from 'react-cookie';
import Header from '../Header';
import { Form } from 'semantic-ui-react'

function Auth(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginView, setIsLoginView] = useState(true);

    const [token, setToken] = useCookies(['q-token']);

    useEffect( () => {
        if(token['q-token']) window.location.href = '/quiz'; 
    }, [token])

    const loginClicked = () => {
        APIN.loginUser({username, password})
            .then(resp => setToken('q-token', resp.token))
            .catch( error => console.log(error))
    }

    const registerClicked = () => {
        APIN.registerUser({username, password})
            .then(() => loginClicked())
            .catch( error => console.log(error))
    }
    return (
       <div>
           <Header />
           <Form style={{padding:'15px'}}>
                    {isLoginView ? <h1>Login</h1>: <h1>Register</h1>}
                    <label htmlFor="username">Username</label><br />
                    <Form.Input fluid id="username" type="text" placeholder="Username" value={username} 
                        onChange={ evt => setUsername(evt.target.value)} /><br />
                        <label htmlFor="password">Password</label><br/>
                    <Form.Input fluid id="password" type="password" placeholder="Password" value={password} 
                        onChange={ evt => setPassword(evt.target.value)}/><br />
                        {   isLoginView ? 
                                <Form.Button  onClick={loginClicked}>Login</Form.Button > : 
                                <Form.Button onClick={registerClicked}>Register</Form.Button >
                        }
                        {
                            isLoginView ? 
                            <p>You do not have an account ? <a style={{cursor:'pointer'}} onClick={()=> setIsLoginView(false)}>Register Here!</a></p> :
                            <p>You already have an account ? <a style={{cursor:'pointer'}} onClick={()=> setIsLoginView(true)}>Login Here!</a></p>
                        }
            </Form>
       </div>
    )
}

export default Auth;