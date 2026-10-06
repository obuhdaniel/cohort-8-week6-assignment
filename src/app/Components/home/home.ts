import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  componentName = signal<string>('Home Component');
}
