import { signOut, getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD, LOGIN } from '../constants/routes';

const Footer = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [stranger, setStranger] = useState('');

  const toTheTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setUserData = async (userAuth) => {
    const { currentUser } = userAuth;
    setUser(currentUser);
    const { isAnonymous } = currentUser;
    setStranger(isAnonymous);
  };

  useEffect(() => {
    const getUser = async () => {
      const userResult = async () => getAuth();
      const userAuth = await userResult();
      await setUserData(userAuth);
    };
    getUser();
  }, [auth]);

  const handleLogOut = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        navigate(LOGIN);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    navigate(LOGIN);
  };

  const handleToDashboard = (event) => {
    event.preventDefault();
    navigate(DASHBOARD);
  };

  const logOutButton = (
    <button onClick={handleLogOut} className="px-10 py-3">
      <i className="fa-solid fa-arrow-right-from-bracket text-3xl"></i>
    </button>
  );
  const newUserButton = (
    <button onClick={handleSignIn} className="px-10 py-3">
      <i className="fa-solid fa-user-plus text-3xl"></i>
    </button>
  );

  return (
    <div className="fixed bottom-0 flex justify-around pr-3 pt-2 w-full bg-gray-200">
      <button onClick={handleToDashboard} className="px-10 py-3">
        <i className="fa-solid fa-house text-3xl"></i>
      </button>
      <button onClick={toTheTop} className="px-10 py-3">
        <i className="fa-solid fa-arrow-up text-3xl"></i>
      </button>
      {stranger ? newUserButton : logOutButton}
    </div>
  );
};

export default Footer;
