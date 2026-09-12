import { Component } from '@angular/core';
import { Icon } from '../../../../shared/ui/icon';
import { SITE } from '../../../../core/config/site.config';
@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly site = SITE;
}
