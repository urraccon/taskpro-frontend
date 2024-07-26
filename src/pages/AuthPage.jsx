import { useParams } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { Welcome } from '../components/Welcome/Welcome.styled';
import NotFound from '../components/NotFound/NotFound';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <Welcome>
      <div className='container'>
        {id === 'login' ? <LoginForm /> : id === 'register' ? <RegisterForm /> : <NotFound />}
      </div>
    </Welcome>
  );
};

export default AuthPage;
