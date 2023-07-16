import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { Container, Title, Input } from './Filter.styled.jsx';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.value;
    dispatch(setFilter(name));
  };

  return (
    <Container>
      <Title>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </Title>
    </Container>
  );
};
