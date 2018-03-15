import { TestBed, inject } from '@angular/core/testing';

import { GetUsersGitService } from './get-users-git.service';

describe('GetUsersGitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUsersGitService]
    });
  });

  it('should be created', inject([GetUsersGitService], (service: GetUsersGitService) => {
    expect(service).toBeTruthy();
  }));
});
