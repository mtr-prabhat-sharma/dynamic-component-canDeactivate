import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared-service';

@Component({
  selector: 'app-user-info-component',
  imports: [],
  templateUrl: './user-info-component.html',
  styleUrl: './user-info-component.scss',
})
export class UserInfoComponent implements OnInit {
  constructor(private ss: SharedService) {}
  @Input() userDetails: any;
  
  ngOnInit() {
    this.ss.userInfo.subscribe((res) => {
      console.log("res",res);
    })
  }
}
