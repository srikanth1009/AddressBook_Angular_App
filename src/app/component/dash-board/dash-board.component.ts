import { Component, OnInit } from '@angular/core';
import { ContactDetails } from 'src/app/service/contact-details';
import { HttpServicesService } from 'src/app/service/http-services.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  user:any;
  contactList:ContactDetails[]=[];

 constructor(private address: HttpServicesService){}
 ngOnInit(){
  this.address.getUser().subscribe( data => { 
    this.user=data;
    this.contactList=this.user.data;
      console.log(this.contactList);
    //  console.log(this.user.employeeId);

       });

}
}