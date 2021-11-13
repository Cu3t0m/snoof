import Login from './components/Login';
import Snoof from './components/Snoof';
import useAuth, { AuthContext } from './hooks/useAuth';
import './App.css';

/**
 * Outer component for providing auth context, and whether to show Login or PostLogin views.
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
