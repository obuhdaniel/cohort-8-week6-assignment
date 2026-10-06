import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { EventDetails } from './event-details';
import { eventList } from '../../data/eventList';

describe('EventDetails', () => {
  async function setup(id: string | null): Promise<ComponentFixture<EventDetails>> {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [EventDetails],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {paramMap: of(convertToParamMap(id === null ? {} : {id}))},
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(EventDetails);
    await fixture.whenStable();
    return fixture;
  }

  it('should show the event matching the id in the route', async () => {
    const fixture = await setup('slr');
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h2')?.textContent).toContain(eventList[1].title);
    expect(compiled.querySelector('.badge')?.textContent?.trim()).toBe(eventList[1].badge);
    expect(compiled.querySelector('.meta')?.textContent).toContain(eventList[1].date);
    expect(compiled.textContent).toContain(eventList[1].description!);
  });

  it('should show the fee only for the event that has one', async () => {
    const withFee = (await setup('bootcamp')).nativeElement as HTMLElement;
    const withoutFee = (await setup('spss')).nativeElement as HTMLElement;

    expect(withFee.textContent).toContain('₦15,000');
    expect(withoutFee.textContent).not.toContain('Registration fee');
  });

  it('should show a not found message for an unknown id', async () => {
    const fixture = await setup('does-not-exist');
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Event not found');
    expect(compiled.querySelector('h2')?.textContent).not.toContain(eventList[0].title);
  });

  it('should link back to the events list', async () => {
    const fixture = await setup('bootcamp');
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('a[href="/events"]')).toBeTruthy();
  });
});
