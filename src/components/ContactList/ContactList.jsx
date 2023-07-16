import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactItem } from 'components/ContactItem/ContactItem.jsx';
import { List, ListItem } from './ContactList.styled.jsx';
import { Loader } from 'components/Loader/Loader.jsx';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
      {!isLoading && !error && (
        <List>
          {filteredContacts.map(contact => (
            <ListItem key={contact.id}>
              <ContactItem contact={contact} />
            </ListItem>
          ))}
        </List>
      )}
      {error && <p>Error: {error}</p>}
    </>
  );
};
