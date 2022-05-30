import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactState } from './reducers';

const getContactState = createFeatureSelector<ContactState>('contacts');

export const selectContacts= createSelector(
  getContactState,
  state => state.contacts
)
export const selectContactId = createSelector(
  getContactState,
  state => state.contactId
)
export const selectContact = createSelector(
  getContactState,
  state => state.contact
)

