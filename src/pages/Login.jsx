import { useNavigate } from 'react-router-dom';
import { signInAnonymously, getAuth } from 'firebase/auth';
import { DASHBOARD } from '../constants/routes';
import LoginComponent from '../components/LoginComponent';

document.body.classList.remove('bg-gray-100');

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const handleGuestLogin = async (event) => {
    event.preventDefault();
    await signInAnonymously(auth)
      .then(() => {
        navigate(DASHBOARD);
      })
      .catch((error) => {});
  };

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen justify-center">
      <div className="sm:flex sm:w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="Iphone profile"
          className="hidden max-w-full sm:block"
        ></img>
      </div>
      <div className="flex flex-col w-5/6 sm:w-2/5">
        <img
          src="/favicon.png"
          className="w-1/4 h-1/4 self-center m-3"
          alt="woodagram logo"
        ></img>
        <h1 className="flex justify-center font-['Instagram'] text-4xl mb-5 px-4 mx-3 ">
          Woodagram
        </h1>
        <LoginComponent />
        <button
          onClick={handleGuestLogin}
          className="mx-auto text-blue-500 underline"
        >
          Continue as a guest
        </button>
      </div>
    </div>
  );
};
export default Login;
