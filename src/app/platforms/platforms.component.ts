import { Component, OnInit } from '@angular/core'
import { Platform } from './platform/platform.model'
import { PlatformsService } from './platforms.service'


@Component({
  selector: 'wza-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.sass']
})
export class PlatformsComponent implements OnInit {

  platforms: Platform[]

  constructor(private platformsService: PlatformsService) { }

  ngOnInit() {
    this.platformsService.platform()
      .subscribe(platforms => this.platforms = platforms)
  }

}
