import { Injectable } from '@angular/core';
import { InformationService } from '../information.service';
import { RestService } from '../rest.service';
import { Observable } from 'rxjs';
import { PlanDetail } from './plan';

@Injectable({
  providedIn: 'root'
})
export class ViewPlanService {

  constructor(private informationService: InformationService, private restService: RestService) { }

  viewPlan(): Observable<PlanDetail[]> {
      return this.restService.getCall(this.informationService.viewPlanUrl);
  }
}
