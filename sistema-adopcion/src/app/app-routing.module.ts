import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { IndexComponent } from './main/mascotas/index/index.component';
import { CreateComponent } from './main/mascotas/create/create.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {path: 'mascotas', children: [
    {path: 'index', component: IndexComponent},
    {path: 'create', component: CreateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
