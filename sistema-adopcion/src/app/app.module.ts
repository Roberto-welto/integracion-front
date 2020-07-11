import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules } from './modules/material.module';
import { HomeComponent } from './main/home/home.component';
import { HeaderComponent } from './main/header/header.component';
<<<<<<< HEAD
import { PetFormComponent } from './main/pet-form/pet-form.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
=======
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './main/mascotas/index/index.component';
import { CreateComponent } from './main/mascotas/create/create.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { DndDirective } from './directives/app-dnd/dnd.directive';
import { ProgressBarComponent } from './main/mascotas/create/progress-bar/progress-bar.component';
import { DialogComponent } from './main/mascotas/create/dialog/dialog.component'
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
>>>>>>> 98a061bd57367de80f8b4cf969ec0fa2708d2f74

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
<<<<<<< HEAD
    PetFormComponent,
    SignInComponent,
    SignUpComponent,
=======
    IndexComponent,
    CreateComponent,
    DialogComponent,
    DndDirective,
    ProgressBarComponent,
    SafeHtmlPipe,
  ],
  entryComponents: [
    DialogComponent
>>>>>>> 98a061bd57367de80f8b4cf969ec0fa2708d2f74
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
=======
    ReactiveFormsModule,
    MatFileUploadModule,
>>>>>>> 98a061bd57367de80f8b4cf969ec0fa2708d2f74
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
