import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './component/add-address/add-address.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';


const routes: Routes = [
  
  { path: '', component: DashBoardComponent },
  { path: 'dashboard', component: DashBoardComponent },
  {path:'addcontact', component:AddAddressComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
