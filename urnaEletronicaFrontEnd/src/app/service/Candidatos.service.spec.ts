/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CandidatosService } from './Candidatos.service';

describe('Service: Candidatos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatosService]
    });
  });

  it('should ...', inject([CandidatosService], (service: CandidatosService) => {
    expect(service).toBeTruthy();
  }));
});
