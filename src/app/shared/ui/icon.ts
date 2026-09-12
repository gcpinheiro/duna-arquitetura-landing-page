import { Component, input } from '@angular/core';
@Component({
  selector: 'app-icon',
  template: `<svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    @switch (name()) {
      @case ('whatsapp') {
        <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.4-5a8.4 8.4 0 1 1 16.1-3.8Z" />
        <path
          d="M8.1 7.7c.2-.3.6-.2.8.1l1 1.8-.7 1.2c.8 1.5 1.8 2.4 3.3 3.1l1.1-.8 1.9.9c.4.2.4.5.2.9-.6 1.3-1.8 1.5-3.3 1-2.9-1-5.4-3.6-5.6-5.9-.1-1 .5-2 1.3-2.3Z"
        />
      }
      @case ('close') {
        <path d="m6 6 12 12M6 18 18 6" />
      }
      @case ('menu') {
        <path d="M4 8h16M4 16h16" />
      }
      @case ('left') {
        <path d="M19 12H5m6-6-6 6 6 6" />
      }
      @case ('right') {
        <path d="M5 12h14m-6-6 6 6-6 6" />
      }
      @case ('down') {
        <path d="M12 4v16m-6-6 6 6 6-6" />
      }
      @default {
        <path d="M5 19 19 5M5 5h14v14" />
      }
    }
  </svg>`,
  styles: [
    `
      :host {
        display: inline-flex;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }
      svg {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class Icon {
  readonly name = input('arrow');
}
