import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Event, eventList } from '../../data/eventList';

export interface EventCard extends Event {
  type: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-events',
  styleUrl: '../../app.css',
  templateUrl: './events.html',
})
export class Events {
    componentName = signal<string>('Events Component');
}
