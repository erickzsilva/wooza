import { Component, OnInit, Input } from '@angular/core';
import { Plan } from './plan.model'

@Component({
  selector: 'wza-plan',
  templateUrl: './plan.component.html'
})
export class PlanComponent implements OnInit {

  @Input() plan: Plan

  constructor() { }

  ngOnInit() {
  }

}
