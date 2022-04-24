import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ArticlesComponent } from './articles/articles.component';
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "contact", component: ContactComponent },
  { path: "signup", component: SignupComponent },
  { path: "articles", component: ArticlesComponent },
  { path: "users", component: UsersComponent },
  { path: "user-profile", component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactComponent];
