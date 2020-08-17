import axios from 'axios';

import contactsAction from './contactsAction';

const fetchContacts = () => dispatch => {
    dispatch(contactsAction.fetchContactsRequest());

    axios
        .get('/contacts')
        .then(response => dispatch(contactsAction.fetchContactsSuccess(response.data)))
        .catch(error => dispatch(contactsAction.fetchContactsError(error)));
};

const addContact = (name, number) => dispatch => {
    dispatch(contactsAction.addContactRequest());

    axios
        .post('/contacts', { name, number })
        .then(response => dispatch(contactsAction.addContactSuccess(response.data)))
        .catch(error => dispatch(contactsAction.addContactError(error)));
};

const removeContact = contactId => dispatch => {
    dispatch(contactsAction.removeContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(contactsAction.removeContactSuccess(contactId)))
        .catch(error => dispatch(contactsAction.removeContactError(error)));
};

const updateContact = (id, name, number) => dispatch => {
    dispatch(contactsAction.updateContactRequest());

    axios
        .patch(`/contacts/${id}`, { name, number })
        .then(response => dispatch(contactsAction.updateContactSuccess(response.data)))
        .catch(error => dispatch(contactsAction.updateContactError(error)));
};

export default {
    fetchContacts,
    addContact,
    removeContact,
    updateContact,
};
