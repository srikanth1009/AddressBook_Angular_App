import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  
    { path: 'header', component: HeaderComponent },
    { path: 'dashbord', component: DashBoardComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
