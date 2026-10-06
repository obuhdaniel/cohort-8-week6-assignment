import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-join',
  styleUrl: './join.css',
  templateUrl: './join.html',
})
export class Join {

  componentName = signal<string>('Join Component');
}
