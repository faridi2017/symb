import { Component, OnInit } from '@angular/core';
import { SybmDemoService } from '../../apiService/sybm-demo.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-cmp-two',
  templateUrl: './cmp-two.component.html',
  styleUrls: ['./cmp-two.component.css']
})
export class CmpTwoComponent implements OnInit {

  constructor(private myService:SybmDemoService) { }

  ngOnInit() {
  }

  get_data(){
    this.myService.get_mocked_data().subscribe((data: any)=>{
     console.log(data);
     
   },
   error => {
     console.error("Error in API");
     sessionStorage.clear();
     return throwError(error);  // Angular 6/RxJS 6
    });
   }
}
