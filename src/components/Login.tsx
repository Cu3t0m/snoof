import { useMemo } from 'react';
import { Button } from 'reactstrap';

const Login = () => {
  const loginUrl = useMemo(() => {
    return (
      'https://www.reddit.com/api/v1/authorize?response_type=code&state=snoof&duration=permanent' +
      `&client_id=${encodeURIComponent(
        'dWRUuIopxj6vVknOqBpUvg'
      )}` +
      `&scope=${encodeURIComponent('read')}` +
      `&redirect_uri=${encodeURIComponent(
        'https://phwebi.github.io/snoof/'
      )}`
    );
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <Button tag="a" color="primary" size="lg" href={loginUrl}>
        Login to Reddit
      </Button>
    </div>
  );
};

export default Login;
