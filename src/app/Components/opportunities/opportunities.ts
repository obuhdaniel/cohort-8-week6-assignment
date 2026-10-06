import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-opportunities',
  styleUrl: './opportunities.css',
  templateUrl: './opportunities.html',
})
export class Opportunities {
  componentName = signal<string>('Opportunities Component');
}
