import { useEffect, useState, createContext } from 'react';
import { useLocalStorage } from 'react-use';
import { Auth, authTokenFromCode } from '../api/reddit';

interface AuthContextInterface {
  data?: Auth;
  clearAuth: () => void;
}
export const AuthContext = createContext<AuthContextInterface | undefined>(
  undefined
);

function useAuth() {
  const [code, setCode] = useState<string>();
  const [auth, setAuth, clearAuth] = useLocalStorage<Auth>(
    'snoof-auth',
    undefined
  );

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    params.code && setCode(params.code);
  }, []);

  // Fetch auth from code
  useEffect(() => {
    if (code) {
      authTokenFromCode(code).then((a) => {
        setAuth(a);
        window.history.pushState('', '', '/'); // clear auth code from browser url
      });
    }
  }, [code]);

  return {
    data: auth,
    clearAuth,
  };
}

export default useAuth;
