import { Component, signal } from '@angular/core';
import { MainNavComponent } from "./main-nav/main-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainNavComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ud-angular-config');
}
