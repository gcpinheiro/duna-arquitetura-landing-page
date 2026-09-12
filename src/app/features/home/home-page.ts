import { Hero } from './components/hero/hero';
import { Component } from '@angular/core';
import { SITE } from '../../core/config/site.config';
import { SERVICES } from './data/home-content';
import { Icon } from '../../shared/ui/icon';
import { Portfolio } from './components/portfolio/portfolio';
@Component({
  selector: 'app-home-page',
  imports: [Icon, Portfolio, Hero],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  readonly site = SITE;
  readonly services = SERVICES;
}
