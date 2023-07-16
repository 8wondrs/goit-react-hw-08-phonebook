import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../Hooks';
import { Container, Name, Button, NickName } from './UserMenu.styled';
import { LogoutOutlined } from '@ant-design/icons';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Name>
        Welcome,
        <NickName>{user.name}</NickName>
      </Name>

      <Button type="button" onClick={() => dispatch(logOut())}>
        <LogoutOutlined />
      </Button>
    </Container>
  );
}
