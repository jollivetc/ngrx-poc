import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { ContactService } from '../contact.service';
import { ContactAction, LoadContactAction } from './contact.actions';



@Injectable()
export class AppEffects {



  constructor(private actions$: Actions, private contactService: ContactService) {}

  effectContactsMgt$ = createEffect(()=> this.actions$.pipe(
    ofType(ContactAction.CONTACTS_LOAD),
    switchMap(()=>this.contactService.load().pipe(
      map(contacts=>({type: ContactAction.CONTACTS_LOADED, contacts})),
      catchError(()=>EMPTY)
    ))
  ))

  effectContactMgt$ = createEffect(()=>this.actions$.pipe(
    ofType(ContactAction.CONTACT_LOAD),
    switchMap((action: LoadContactAction)=>this.contactService.searchById(action.contactId).pipe(
      map(contact => ({type: ContactAction.CONTACT_LOADED, contact})),
      catchError(()=>EMPTY)
    ))
  ))

}
