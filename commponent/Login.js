import React from 'react';
import { useState, useEffect } from 'react'


function LoginComp() {

    const [ users, setUsers] = useState([])

    useEffect(() => {
      setUsers([...users, {username: 'admin', password: '123'}])
    },[])

    return ( 
        <div className="container">
            <div className="card-body">
                <h5 class="card-title text-center">Sign In</h5>
                <form autocomplete="off" >
                        <div className="input-group flex-nowrap" >
                            <span className="input-group-text">
                                <i className="bi bi-person-fill" />
                            </span>
                            <input className="form-control" placeholder="Username" name="username"/>
                        </div>
                    
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text">
                                <i class="bi bi-key-fill" />
                            </span>
                        <input className="form-control" placeholder="Password" name="password"/>
                        </div>

                        <div className="d-grid gap-2">
                            <button className="btn btn-primary btn-block" onClick={(e) => e.preventDefault()}>
                                Login
                            </button>
                        </div>
                        New User ?<br/>
                        <a href="#" className="">Create Account</a>
                </form>
            </div>
            
        </div>
        
    );
}
 
export default LoginComp;