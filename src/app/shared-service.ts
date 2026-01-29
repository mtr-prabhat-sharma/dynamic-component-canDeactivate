import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  userInfo = new BehaviorSubject({});

  sendUserInfo(userObj: any){
    this.userInfo.next(userObj);
  }

  getUserInfo(){
    
  }
}
