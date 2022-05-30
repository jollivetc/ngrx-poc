import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact/contact.component';
import { ContactsListComponent } from './contact/contacts-list/contacts-list.component';

const routes: Routes = [
  {path:'', redirectTo:'contacts', pathMatch:'full'},
  {path:'contacts', component:ContactsListComponent},
  {path:'contacts/:id', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
