import React, { useState, useEffect } from "react";

import { axiosWithAuth } from '../utilis/axiosWithAuth';
import { Redirect } from 'react-router-dom';

const initialState= {
  username: '',
  password: '',
  email: ''
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    const [login, setlogin] = useState(initialState);

    // handleChange = e => {
    //   setlogin({[e.target.name]: e.target.value})
    // }

  const formLogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', login)
      .then(res => console.log(res))
      .catch(err => console.log(err.response))
  }
  
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <input
          type='text'
          name='username'
          // value={username}
          // onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          // value={password}
          // onChange={handleChange}
        />
        <input
          type='text'
          name='email'
          // value={email}
          // onChange={handleChange}
        />
      <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
