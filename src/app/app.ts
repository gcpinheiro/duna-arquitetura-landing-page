import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from './layout/header/site-header';
import { SiteFooter } from './layout/footer/site-footer';
import { Icon } from './shared/ui/icon';
import { SITE } from './core/config/site.config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter, Icon],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly site = SITE;
}
