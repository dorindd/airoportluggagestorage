import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbCalendar, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlacesComponent } from './places/places.component';
import { StorageComponent } from './storage/storage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatNativeDateModule} from '@angular/material/core';
import { DatesComponent } from './dates/dates.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { FooterComponent } from './footer/footer.component';
import { LockercodeComponent } from './lockercode/lockercode.component';
import { LuggaestorageComponent } from './luggaestorage/luggaestorage.component';
import { RemoveluggageComponent } from './removeluggage/removeluggage.component';
import {MatButtonModule} from '@angular/material/button';
import { AdvertisingComponent } from './advertising/advertising.component';

import {MatCardModule} from '@angular/material/card';
import { LocationComponent } from './location/location.component';
import { TerminalplacesComponent } from './terminalplaces/terminalplaces.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    NavbarComponent,
    PlacesComponent,
    StorageComponent,
    DatesComponent,
    InsuranceComponent,
    FooterComponent,
    LockercodeComponent,
    LuggaestorageComponent,
    RemoveluggageComponent,
    AdvertisingComponent,
    LocationComponent,
    TerminalplacesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule



  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
