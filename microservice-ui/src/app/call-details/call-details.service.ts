import { Injectable } from "@angular/core";
import { InformationService } from "../information.service";
import { RestService } from "../rest.service";
import { Observable } from "rxjs";
import { CallDetail } from "./call-detail";
import { HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CallDetailsService {
  constructor(private informationService: InformationService, private restService: RestService) {}

  getCallDetails(): Observable<CallDetail[]> {
    return this.restService.getCall(this.informationService.callDetailUrl +this.informationService.phoneNo +"/calldetails");
  }
}
