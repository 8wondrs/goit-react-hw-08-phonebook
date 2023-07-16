import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactName, ContactNumber, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <ContactName>{contact.name}: </ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <Button onClick={handleDelete}>delete</Button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
