import React from "react";

import { axiosWithAuth } from '../utilis/axiosWithAuth';
import { Redirect } from 'react-router-dom';



class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state= {
    credentials: {

      username: '',
      password: '',
      // email: ''
    }
  }

    handleChange = e => {
     this.setState({
       credentials: {
         ...this.state.credentials,
         [e.target.name]: e.target.value
       }
     })
    }

 login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/BubblesPage')
      })
      .catch(err => console.log(err.response))
  }
  render() {
    if (localStorage.getItem('token')) {
      return <Redirect to='/BubblesPage' />
    }
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={this.login}>
        <input
          type='text'
          name='username'
          value={this.state.credentials.username}
          onChange={this.handleChange}
        />
        <input
          type='password'
          name='password'
          value={this.state.credentials.password}
          onChange={this.handleChange}
        />
      <button>Log in</button>
      </form>
    </div>
  );
};
}

export default Login;
