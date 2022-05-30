import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

const CONTACTS:Contact[] = [
  {id:1, firstname:'John', lastname:'Doe', age:33},
  {id:2, firstname:'Jane', lastname:'Doe', age:32},
]

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts:Map<number, Contact>;

  constructor() {
    this.contacts=new Map(CONTACTS.map(c=>[c.id, c]));
   }


   load():Observable<ReadonlyArray<Contact>>{
     return new Observable(
       subscriber => {
         setTimeout(()=>{
            const contacts: readonly Contact[]= [...this.contacts.values()];
            subscriber.next(contacts);
            subscriber.complete();
         }, 3000)
       }
     );
   }
   searchById(id:number):Observable<Contact>{
     return new Observable(
       subscriber =>{
         subscriber.next(this.contacts.get(id));
         subscriber.complete();
       }
     )
   }
}
