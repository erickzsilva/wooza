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

  constructor(
    private plansService: PlansService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    const idPlatform = this.route.snapshot.params.id;

    this.plansService.getPlans(idPlatform)
    .subscribe(plans => {
      console.log(plans)
      this.plans = plans.planos
    });

  }
   data = { 
    dataPlatform:  JSON.parse(localStorage
      .getItem('plataforma')
      .toLowerCase()
      .replace('|',' '))
  }

  selectPlan(plan: Plan){
    console.log(plan)
    this.router.navigate(['form'])
    localStorage.setItem('plano', JSON.stringify(plan))
  }

}
