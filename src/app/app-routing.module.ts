import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { LockercodeComponent } from './lockercode/lockercode.component';
import { LuggaestorageComponent } from './luggaestorage/luggaestorage.component';
import { MainComponent } from './main/main.component';
import { RemoveluggageComponent } from './removeluggage/removeluggage.component';
import { TerminalComponent } from './terminal/terminal.component';

const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"lockercode",component:LockercodeComponent},
  {path:'luggaestorage',component:LuggaestorageComponent},
  {path:"removeluggage",component:RemoveluggageComponent},
  {path:"location",component:LocationComponent},
  {path:"terminal",component:TerminalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
