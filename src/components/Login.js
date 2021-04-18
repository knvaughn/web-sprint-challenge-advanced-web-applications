import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialForm = {
  username: '',
  password: ''
}

const Login = () => {
  const [form, setForm] = useState(initialForm);
  const history = useHistory();

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  
  const error = "";
  //replace with error state

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/login", form)
    .then(response => {
      console.log(response)
      localStorage.setItem('token', response.data.payload);
      history.push('/bubbles');
    })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input 
              type="text"
              name="username"
              data-testid="username"
              onChange={handleChange}
              value={form.username}
              required
            />
          </label>
          <label>
            Password
            <input 
              type="password"
              name="password"
              data-testid="password"
              onChange={handleChange}
              value={form.password}
              required
            />
          </label>
          <button>Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.