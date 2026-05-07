import { Component, AfterViewInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  protected readonly title = signal('portfolio');

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && (window as any).initPortfolio) {
      (window as any).initPortfolio();
    }
  }
}
