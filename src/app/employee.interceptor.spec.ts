import { TestBed } from '@angular/core/testing';

import { EmployeeInterceptor } from './employee.interceptor';

describe('EmployeeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EmployeeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EmployeeInterceptor = TestBed.inject(EmployeeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
