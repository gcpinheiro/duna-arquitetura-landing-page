import { Component, ElementRef, OnDestroy, computed, signal, viewChild } from '@angular/core';
import { PROJECTS } from '../../data/home-content';
import { Project } from '../../../../shared/models/project.model';
import { Icon } from '../../../../shared/ui/icon';
@Component({
  selector: 'app-portfolio',
  imports: [Icon],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnDestroy {
  readonly categories = ['Todos', 'Residencial', 'Interiores'] as const;
  readonly category = signal<string>('Todos');
  readonly projects = computed(() =>
    PROJECTS.filter((p) => this.category() === 'Todos' || p.category === this.category()),
  );
  readonly selected = signal<Project | null>(null);
  readonly index = signal(0);
  readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('gallery');
  private trigger?: HTMLElement;
  private previousOverflow = '';
  private touchStart = 0;
  open(project: Project, event: Event) {
    this.trigger = event.currentTarget as HTMLElement;
    this.selected.set(project);
    this.index.set(0);
    this.previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    this.dialog().nativeElement.showModal();
  }
  close() {
    this.dialog().nativeElement.close();
    this.restore();
  }
  restore() {
    if (!this.selected()) return;
    document.body.style.overflow = this.previousOverflow;
    this.selected.set(null);
    this.trigger?.focus();
  }
  move(step: number) {
    const count = this.selected()?.images.length ?? 0;
    if (count) this.index.update((i) => (i + step + count) % count);
  }
  key(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.move(event.key === 'ArrowRight' ? 1 : -1);
    }
  }
  backdrop(event: MouseEvent) {
    if (event.target === this.dialog().nativeElement) this.close();
  }
  touch(event: TouchEvent) {
    this.touchStart = event.changedTouches[0].clientX;
  }
  swipe(event: TouchEvent) {
    const delta = event.changedTouches[0].clientX - this.touchStart;
    if (Math.abs(delta) > 60) this.move(delta < 0 ? 1 : -1);
  }
  ngOnDestroy() {
    if (this.selected()) {
      this.dialog().nativeElement.close();
      this.restore();
    }
  }
}
