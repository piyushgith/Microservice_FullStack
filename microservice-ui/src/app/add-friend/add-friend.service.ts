import { Injectable } from '@angular/core';
import { InformationService } from '../information.service';
import { RestService } from '../rest.service';
import { AddFriend } from './add-friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  constructor(public informationService: InformationService, public restService: RestService) { }

  addFriend(data: AddFriend): Observable<boolean>{
    return this.restService.postCall(this.informationService.addFriendUrl+this.informationService.phoneNo,data);
  }


}
