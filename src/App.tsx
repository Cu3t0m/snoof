import Login from './components/Login';
import Snoof from './components/Snoof';
import useAuth, { AuthContext } from './hooks/useAuth';
import './App.css';

/**
 * App wrapper that provides auth context and renders Login or Snoof (the main component)
 */
const App = () => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <>{auth ? <Snoof /> : <Login />}</>
    </AuthContext.Provider>
  );
};

export default App;
