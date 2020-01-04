import { Component, OnInit } from '@angular/core';
import { PlanDetail } from './plan';
import { ViewPlanService } from './view-plan.service';

@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html',
  styleUrls: ['./view-plan.component.css']
})
export class ViewPlanComponent implements OnInit {

  planDetails: PlanDetail[];
  errorMsg: string;
  constructor(private viewPlanService: ViewPlanService) { }

  getPlanDetails() {
    this.viewPlanService.viewPlan().subscribe(
      data => this.planDetails = data,
      error => this.errorMsg = error
    );
  }

  ngOnInit() {
    this.getPlanDetails();
  }

}
