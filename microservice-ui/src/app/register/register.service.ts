import { Injectable } from '@angular/core';
import { InformationService } from '../information.service';
import { RestService } from '../rest.service';
import { Register } from './register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private informationService: InformationService, private restService: RestService) { }

  register(data: Register): Observable<boolean> {
    return this.restService.postCall(this.informationService.registerUrl, data);
  }
}
