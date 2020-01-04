import { Injectable } from '@angular/core';
import { InformationService } from '../information.service';
import { RestService } from '../rest.service';
import { Observable } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private informationService: InformationService, private restService: RestService) { }

  getProfile(): Observable<Profile> {
      return this.restService.getCall(this.informationService.profileUrl + this.informationService.phoneNo);
  }
}
