import actionTypes from './contactsActionTypes';

const fetchContactsRequest = () => ({
    type: actionTypes.FETCH_REQUEST,
});
const fetchContactsSuccess = data => ({
    type: actionTypes.FETCH_SUCCESS,
    payload: [...data],
});
const fetchContactsError = error => ({
    type: actionTypes.FETCH_ERROR,
    payload: error,
});

const addContactRequest = () => ({
    type: actionTypes.ADD_REQUEST,
});
const addContactSuccess = contact => ({
    type: actionTypes.ADD_SUCCESS,
    payload: {
        ...contact,
    },
});
const addContactError = error => ({
    type: actionTypes.ADD_ERROR,
    payload: error,
});

const removeContactRequest = () => ({
    type: actionTypes.REMOVE_REQUEST,
});
const removeContactSuccess = contactId => ({
    type: actionTypes.REMOVE_SUCCESS,
    payload: {
        contactId,
    },
});
const removeContactError = error => ({
    type: actionTypes.REMOVE_ERROR,
    payload: error,
});

const updateContactRequest = () => ({
    type: actionTypes.UPDATE_REQUEST,
});
const updateContactSuccess = contact => ({
    type: actionTypes.UPDATE_SUCCESS,
    payload: {
        ...contact,
    },
});
const updateContactError = error => ({
    type: actionTypes.UPDATE_ERROR,
    payload: error,
});

const changeFilter = filter => ({
    type: actionTypes.CHANGE_FILTER,
    payload: filter,
});

export default {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    removeContactRequest,
    removeContactSuccess,
    removeContactError,
    updateContactRequest,
    updateContactSuccess,
    updateContactError,
    changeFilter,
};
