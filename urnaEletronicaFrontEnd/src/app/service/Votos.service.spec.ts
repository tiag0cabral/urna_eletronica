/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VotosService } from './Votos.service';

describe('Service: Votos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VotosService]
    });
  });

  it('should ...', inject([VotosService], (service: VotosService) => {
    expect(service).toBeTruthy();
  }));
});
