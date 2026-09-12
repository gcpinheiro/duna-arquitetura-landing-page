import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { Icon } from '../../shared/ui/icon';
@Component({
  selector: 'app-site-header',
  imports: [Icon],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  readonly menuOpen = signal(false);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  closeMenu() {
    this.menuOpen.set(false);
  }
  @HostListener('document:keydown.escape') escape() {
    if (this.menuOpen()) {
      this.closeMenu();
      this.element.nativeElement.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
    }
  }
}
