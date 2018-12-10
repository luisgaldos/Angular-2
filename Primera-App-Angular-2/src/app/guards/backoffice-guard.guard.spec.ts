import { TestBed, async, inject } from '@angular/core/testing';

import { BackofficeGuardGuard } from './backoffice-guard.guard';

describe('BackofficeGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackofficeGuardGuard]
    });
  });

  it('should ...', inject([BackofficeGuardGuard], (guard: BackofficeGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
