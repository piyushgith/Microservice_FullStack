import { Injectable } from "@angular/core";
import { InformationService } from "../information.service";
import { RestService } from "../rest.service";
import { Login } from "./login";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private informationService: InformationService, private restService: RestService) {}

  login(data: Login): Observable<boolean> {
    return this.restService.postCall(this.informationService.loginUrl, data);
  }
}
