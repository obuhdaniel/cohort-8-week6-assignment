import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-programmes',
  styleUrl: './programmes.css',
  templateUrl: './programmes.html',
})
export class Programmes {
  componentName = signal<string>('Programmes Component');
}
