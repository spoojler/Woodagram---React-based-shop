import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { useEffect } from 'react';
import { DASHBOARD } from '../constants/routes';
import { useNavigate } from 'react-router-dom';

const SignUpComponent = ({ email, password, clicked }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [userName, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    if (userName)
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          updateProfile(auth.currentUser, { displayName: userName })
            .then(() => {
              navigate(DASHBOARD);
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
  }, [clicked]);

  return (
    <input
      aria-label="Enter your Username"
      type="text"
      placeholder="Username"
      autoComplete="on"
      className="text-md text-gray-base mr-3 ml-3 py-5 px-4 h-2 border border-gray-primary rounded mb-3"
      onChange={handleUsernameChange}
      required
    />
  );
};

export default SignUpComponent;
