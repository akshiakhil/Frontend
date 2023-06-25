import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: 'home' ,component:HomeComponent},
  {path: 'contact' , component:ContactComponent},
  {path: 'footer' , component:FooterComponent},
  {path: 'header' , component:HeaderComponent},
  {path: 'about' , component:AboutComponent},
  {path: 'pipes' , component:PipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
