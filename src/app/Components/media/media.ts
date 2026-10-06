import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-media',
  styleUrl: './media.css',
  templateUrl: './media.html',
})
export class Media {
  componentName = signal<string>('Media Component');
}
