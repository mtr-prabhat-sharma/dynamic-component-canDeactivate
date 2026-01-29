import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private userInfoSource = new BehaviorSubject<any>({});
  userInfo = this.userInfoSource.asObservable();
  sendUserInfo(userObj: any){
    this.userInfoSource.next(userObj);
  }

  getUserInfo(){

  }
}
