import { TestBed } from '@angular/core/testing';

import { MyFirstServiceService } from './user.service';

describe('MyFirstServiceService', () => {
  let service: MyFirstServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirstServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
