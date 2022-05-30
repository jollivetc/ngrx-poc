import { state } from "@angular/animations";
import { ActionReducerMap, createReducer, on,  } from "@ngrx/store";
import { Contact } from "../../contact";
import * as fromContactAction from '../contact.actions';

export interface ContactState {
  contacts?: ReadonlyArray<Contact>;
  contactId?: number;
  contact?: Contact;
}

export interface AppState {
  contacts : ContactState;
}

const contactReducer = createReducer(
  {},
  on(fromContactAction.loadedContacts,  (state, {contacts}) =>({...state, contacts})),
  on(fromContactAction.loadContact,     (state, {contactId})=>({...state,contactId})),
  on(fromContactAction.loadedContact,   (state, {contact})  =>({...state, contact}))
)

export const reducers: ActionReducerMap<AppState>= {
  contacts: contactReducer
}
