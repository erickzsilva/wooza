import { Component, OnInit, Input } from '@angular/core';
import { Platform } from './platform.model'

@Component({
  selector: 'wza-platform',
  templateUrl: './platform.component.html'
})
export class PlatformComponent implements OnInit {

  @Input() platform: Platform

  @Input() data: string

  constructor() { }

  ngOnInit() {
  }

}
