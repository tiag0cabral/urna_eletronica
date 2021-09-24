/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipoVotacaoService } from './TipoVotacao.service';

describe('Service: TipoVotacao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoVotacaoService]
    });
  });

  it('should ...', inject([TipoVotacaoService], (service: TipoVotacaoService) => {
    expect(service).toBeTruthy();
  }));
});
