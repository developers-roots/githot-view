import { TestBed, inject } from '@angular/core/testing';

import { GetListUsersStateService } from './get-list-users-state.service';

describe('GetListUsersStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetListUsersStateService]
    });
  });

  it('should be created', inject([GetListUsersStateService], (service: GetListUsersStateService) => {
    expect(service).toBeTruthy();
  }));
});
