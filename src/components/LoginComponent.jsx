import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { DASHBOARD } from '../constants/routes';
import SignUpComponent from './SignUpComponent';
import { auth } from '../firebaseData';
import { useNavigate } from 'react-router-dom';
import CircleLoader from './CircleLoader';
import useLoader from '../hooks/useLoader';

const LoginComponent = () => {
  const navigate = useNavigate();

  const [emailAdress, setEmailAdress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signUpTrigger, setSignUpTrigger] = useState(false);
  const [signUpClicked, setSignUpClicked] = useState(false);
  const { showLoader, setShowLoader } = useLoader();

  const handleEmailChange = (event) => {
    setEmailAdress(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    setShowLoader(true);
    event.preventDefault();
    setSignUpClicked(!signUpClicked);
    if (signUpTrigger === false) {
      signInWithEmailAndPassword(auth, emailAdress, password)
        .then((result) => {
          console.log(showLoader);
          navigate(DASHBOARD);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
          setShowLoader(false);
        });
    }
  };
  const showSignUp = () => {
    setSignUpTrigger(true);
  };
  const isErrorText = error ? 'Invalid email or password!' : null;
  const isErrorSignUpButton = error ? "Don't have account?" : null;
  const logInButton = signUpTrigger ? 'Sign up' : 'Log in';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center">
      {signUpTrigger ? (
        <SignUpComponent
          email={emailAdress}
          password={password}
          clicked={signUpClicked}
        />
      ) : null}
      <input
        aria-label="Enter your email adress"
        type="text"
        placeholder="Email address"
        autoComplete="on"
        className="text-md text-gray-base ml-3 mr-3 p-5 h-2 border border-gray-primary rounded mb-3"
        onChange={handleEmailChange}
        required
      />
      <input
        aria-label="Enter your password"
        type="password"
        placeholder="Password"
        autoComplete="on"
        className="text-md text-gray-base mr-3 ml-3 py-5 px-4 h-2 border border-gray-primary rounded mb-3"
        onChange={handlePasswordChange}
        required
      />
      <p className=" text-red-500 mb-3 bg-red-50 text-center">{isErrorText}</p>
      {showLoader ? (
        <CircleLoader />
      ) : (
        <input
          type="submit"
          className="cursor-pointer mx-auto text-lg w-1/3 min-w-fit text-white py-2 rounded-full mb-3 bg-blue-500"
          value={logInButton}
        />
      )}
      <button onClick={showSignUp} className="mb-3 underline">
        {isErrorSignUpButton}
      </button>
    </form>
  );
};

export default LoginComponent;
