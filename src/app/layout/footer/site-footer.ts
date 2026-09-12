import { Component } from '@angular/core';
import { SITE } from '../../core/config/site.config';
@Component({
  selector: 'app-site-footer',
  template: `<footer class="container">
    <a class="footer-brand" href="#inicio"
      ><img src="/brand/logo.png" width="500" height="179" alt="Duna Arquitetura" loading="lazy"
    /></a>
    <p>Lar é onde se começa.</p>
    <a [href]="site.instagram" target="_blank" rel="noopener noreferrer">Instagram ↗</a
    ><small>© {{ year }} Duna Arquitetura</small>
  </footer>`,
  styles: [
    `
      footer {
        padding-top: 44px;
        padding-bottom: 110px;
        display: flex;
        align-items: center;
        gap: 40px;
        font-size: 12px;
      }
      .footer-brand img {
        width: 110px;
        height: auto;
      }
      p {
        flex: 1;
      }
      a {
        text-decoration: none;
      }
      small {
        font-size: 11px;
      }
      @media (max-width: 650px) {
        footer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        p {
          font-size: 11px;
        }
        small {
          grid-column: 1/-1;
        }
      }
    `,
  ],
})
export class SiteFooter {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
}
