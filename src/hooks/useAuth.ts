import { useEffect, useState, createContext } from 'react';
import { useLocalStorage } from 'react-use';
import { Auth, authTokenFromCode } from '../api/reddit';

export const AuthContext = createContext<Auth | undefined>(undefined);

function useAuth() {
  const [code, setCode] = useState<string>();
  const [auth, setAuth] = useLocalStorage<Auth>('snoof-auth', undefined);

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
      })
    }
  }, [code]);

  // Remove auth when expired
  useEffect(() => {
    let timeout: number | undefined;

    if (auth) {
      timeout = setTimeout(() => {
        setAuth(undefined);
      }, auth.expires_in * 1000);
    }

    return () => clearInterval(timeout);
  }, [auth]);

  return auth;
};

export default useAuth;