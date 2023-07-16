import { useAuth } from '../Hooks';
import { Links } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Links to="/" end>
        Home
      </Links>
      {isLoggedIn && <Links to="/contacts">Phonebook</Links>}
    </nav>
  );
};

export default Navigation;
