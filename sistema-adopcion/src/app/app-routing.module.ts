import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
<<<<<<< HEAD
import { PetFormComponent } from './main/pet-form/pet-form.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
=======
import { IndexComponent } from './main/mascotas/index/index.component';
import { CreateComponent } from './main/mascotas/create/create.component';
>>>>>>> 98a061bd57367de80f8b4cf969ec0fa2708d2f74

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
<<<<<<< HEAD
  { path: 'newPet', component: PetFormComponent, canActivate: [AuthGuard]},
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
=======
  {path: 'mascotas', children: [
    {path: 'index', component: IndexComponent},
    {path: 'create', component: CreateComponent}
  ]}
>>>>>>> 98a061bd57367de80f8b4cf969ec0fa2708d2f74
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
