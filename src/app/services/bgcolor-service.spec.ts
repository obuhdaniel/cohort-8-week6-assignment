import { TestBed } from '@angular/core/testing';
import { BgcolorService } from './bgcolor-service';

describe('BgcolorService', () => {
  let service: BgcolorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BgcolorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
