import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { FormReactivoComponent } from './components/form-reactivo/form-reactivo.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    ToolbarComponent,
    AlumnosComponent,
    FormReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
