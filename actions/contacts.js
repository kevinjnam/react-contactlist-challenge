import { resolveContacts } from '../utils/mockAPI';

export const fetchContacts = () => async dispatch => {
  dispatch({ type: 'FETCH_CONTACTS_FETCHING' });

  try {
    const contacts = await resolveContacts();
    dispatch({ type: 'FETCH_CONTACTS_COMPLETE', data: contacts.data });
  } catch (err) {
    dispatch({ type: 'FETCH_CONTACTS_FAILED' });
  }
};

export const modifyFavorite = contact => ({
  type: 'MODIFY_FAVORITE',
  data: contact
});
