import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './modules/material.module';
import { HomeComponent } from './main/home/home.component';
import { HeaderComponent } from './main/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './main/mascotas/index/index.component';
import { CreateComponent } from './main/mascotas/create/create.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { DndDirective } from './directives/app-dnd/dnd.directive';
import { ProgressBarComponent } from './main/mascotas/create/progress-bar/progress-bar.component';
import { DialogComponent } from './main/mascotas/create/dialog/dialog.component'
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DonacionModalComponent } from './main/donacion/donacion-modal/donacion-modal.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { ModalMascotaComponent } from './main/mascotas/index/modal-mascota/modal-mascota.component';
import { ModalImgComponent } from './main/mascotas/index/modal-img/modal-img.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IndexComponent,
    CreateComponent,
    SignInComponent,
    SignUpComponent,
    DialogComponent,
    DndDirective,
    ProgressBarComponent,
    SafeHtmlPipe,
    DonacionModalComponent,
    ModalMascotaComponent,
    ModalImgComponent,
  ],
  entryComponents: [
    DialogComponent,
    DonacionModalComponent,
    ModalMascotaComponent,
    ModalImgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    FormsModule,
    ReactiveFormsModule,
    MatFileUploadModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
