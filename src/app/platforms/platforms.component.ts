import { Component, OnInit } from '@angular/core'
import { Platform } from './platform/platform.model'
import { PlatformsService } from './platforms.service'
import { Router } from '@angular/router'


@Component({
  selector: 'wza-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.sass']
})
export class PlatformsComponent implements OnInit {

  platforms: Platform[] = []

  constructor(private platformsService: PlatformsService, private router: Router) { }

  ngOnInit() {
    this.platformsService.getPlatform()
      .subscribe(platforms => {
        this.platforms = platforms.plataformas;
      });
  }

  selectPlatform(platform: Platform){
    this.router.navigate(['plans',`${platform.sku}`]);
    localStorage.setItem('plataforma', JSON.stringify(platform));
  }

}
