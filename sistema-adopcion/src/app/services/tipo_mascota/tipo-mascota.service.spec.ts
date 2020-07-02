import { TestBed } from '@angular/core/testing';

import { TipoMascotaService } from './tipo-mascota.service';

describe('TipoMascotaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoMascotaService = TestBed.get(TipoMascotaService);
    expect(service).toBeTruthy();
  });
});
