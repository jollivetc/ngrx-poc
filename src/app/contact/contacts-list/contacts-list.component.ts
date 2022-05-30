import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadContacts } from '../state/contact.actions';
import { selectContacts } from '../state/contact.selectors';
import { ContactState } from '../state/reducers';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts$ = this.store.select(selectContacts);

  constructor(private store: Store<ContactState>, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(loadContacts());
  }

  onClick(contactId:number){
    this.router.navigate(['contacts', contactId]);
  }

}
