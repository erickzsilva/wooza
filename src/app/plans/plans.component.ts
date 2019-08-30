import { Component, OnInit } from '@angular/core'
import { Plan } from './plan/plan.model'
import { PlansService } from './plans.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'wza-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.sass']
})
export class PlansComponent implements OnInit {

  plans: Plan[] = []

  constructor(private plansService: PlansService, private route: ActivatedRoute) { }

  ngOnInit() {
    const idPlatform = this.route.snapshot.params.id;

    this.plansService.getPlans(idPlatform)
    .subscribe(plans => {
      console.log(plans);
      this.plans = plans.planos;
    });
  }

}
