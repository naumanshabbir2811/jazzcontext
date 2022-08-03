import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateAuthDispathContext } from '../../context/UserContext';

function SignIn() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const isAuthenticated = useCreateAuthStateContext();
  const { handleAuthChange } = useCreateAuthDispathContext();
  // console.log(isAuthenticated);
  const handleOnClick = () => {
    if (userName !== 'admin' && password !== 'nauman123') {
      return;
    }
    handleAuthChange(true);
    navigate('/cart');
  };
  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleOnClick}>Sign In</button>
    </div>
  );
}
export default SignIn;
