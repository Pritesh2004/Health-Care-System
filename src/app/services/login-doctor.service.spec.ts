import { TestBed } from '@angular/core/testing';

import { LoginDoctorService } from './login-doctor.service';

describe('LoginDoctorService', () => {
  let service: LoginDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
