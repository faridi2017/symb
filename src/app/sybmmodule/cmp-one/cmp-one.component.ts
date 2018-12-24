import { Component, OnInit } from '@angular/core';
import { SybmDemoService } from '../../apiService/sybm-demo.service';
import { throwError } from 'rxjs';
import { Profile } from '../../modal/profile';

@Component({
  selector: 'app-cmp-one',
  templateUrl: './cmp-one.component.html',
  styleUrls: ['./cmp-one.component.css']
})
export class CmpOneComponent implements OnInit {

  public data:Profile[];

  constructor(private myService: SybmDemoService) { 


  }

  ngOnInit() {
  }

  get_data(){
   this.myService.get_mocked_data().subscribe((data: Profile[])=>{
    this.data=data;
    console.log(data);
    
  },
  error => {
    console.error("Error in API");
    sessionStorage.clear();
    return throwError(error);  // Angular 6/RxJS 6
   });
  }
}
