import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Event, eventList } from '../../data/eventList';

export interface QueryParam {
  key: string;
  value: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-event-details',
  styleUrl: '../../app.css',
  templateUrl: './event-details.html',
})
export class EventDetails {
  private readonly route = inject(ActivatedRoute);

  readonly event = signal<Event | null>(null);
  readonly notFound = signal(false);

  readonly queryParams = signal<QueryParam[]>([]);
  readonly category = signal<string | null>(null);
  readonly type = signal<string | null>(null);

  readonly queryString = computed(() =>
    this.queryParams()
      .map(({ key, value }) => `${key}=${value}`)
      .join('&'),
  );



  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const id = params.get('id');
      const match = eventList.find((item) => item.id === id) ?? null;

      this.event.set(match);
      this.notFound.set(id !== null && match === null);
    });

    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.queryParams.set(params.keys.map((key) => ({ key, value: params.get(key) ?? '' })));
      this.category.set(params.get('category'));
      this.type.set(params.get('type'));
    });
  }
}
