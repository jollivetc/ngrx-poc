import { createAction, props } from '@ngrx/store';
import { Contact } from '../contact';

const enum ContactAction {
  CONTACTS_LOAD = "[Contact] Load Contacts",
  CONTACTS_LOADED = "[Contact] Loaded Contacts",
  CONTACT_LOAD = "[Contact] load Contact",
  CONTACT_LOADED = "[Contact] loaded Contact"
}

export const loadContacts   = createAction(ContactAction.CONTACTS_LOAD);
export const loadedContacts = createAction(ContactAction.CONTACTS_LOADED, props<{contacts: ReadonlyArray<Contact>}>());
export const loadContact    = createAction(ContactAction.CONTACT_LOAD, props<{id:number}>());
export const loadedContact  = createAction(ContactAction.CONTACT_LOADED, props<{contact:Contact}>());