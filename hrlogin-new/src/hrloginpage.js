import React, { useState } from 'react';
import axios from 'axios';
import hrlogin from './hrlogin.css'
// import apiService from '../src/service/AuthService'
import { useNavigate } from 'react-router-dom';



function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authenticated,setauthenticated]=useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // try {
    //   // Send a POST request to your authentication endpoint
    //   const response = await axios.post('http://localhost:8080/api/login', {
    //     username: username,
    //     password: password,
    //   });

    //   //  Handle the response here
    //   console.log(response.data);

    //   // If authentication is successful, you can redirect or set a token in your app's state
    // } catch (error) {
    //   // Handle errors here, e.g., display an error message to the user
    //   console.error(error);
    //   setError('Authentication failed. Please check your username and password.');
    // }


    const response =await axios.get('http://localhost:8080/api/getData/5')
    setauthenticated(response.data)

    // if (authenticated.username === username && authenticated.password === password) {
      
    //     navigate('/home');
    //     setLoginMessage('Login Successful');   
    // }
    // else{
    //   setLoginMessage('Login Failed. Please check your username and password.');
    // }
    try{
      if (response.data.username === username && response.data.password === password) {
        setLoginMessage('Login Successful');
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      } else {
        setLoginMessage('Login Failed. Please check your username and password.');
      }
  } catch (error) {
    console.error(error);
    setLoginMessage('An error occurred. Please try again later.');
  }  
    

    
  };
   //this is loginpage

  return (
    <div className='bg-conatainer'>
      <div className='form'>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
        {<p className="error">{loginMessage}</p>}
      </div>
    </div>
  );
}

export default LoginPage;
