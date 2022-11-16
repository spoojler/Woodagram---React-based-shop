import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useEffect, useState } from 'react';

const useAuthListener = () => {
  const [user, setUser] = useState('');
  const auth = getAuth();

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return listener();
  }, []);

  return { user };
};
export default useAuthListener;
