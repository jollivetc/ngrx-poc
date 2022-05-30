import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ContactAction } from '../state/contact.actions';
import { selectContact } from '../state/contact.selectors';
import { ContactState } from '../state/reducers';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  contact$ = this.store.select(selectContact);
  private _subscription?: Subscription;
  constructor( private route: ActivatedRoute, private store: Store<ContactState>) { }

  ngOnInit(): void {
    this._subscription = this.route.params.subscribe({
      next:(params)=>{
        this.store.dispatch({type:ContactAction.CONTACT_LOAD, contactId: parseInt(params['id'])})
      }
    })
  }
  ngOnDestroy(): void {
    this._subscription?.unsubscribe()
  }
}
