import { Injectable } from '@nestjs/common';

@Injectable()
export class ClasesService {
  private clases = [
    { id: 1, nombre: 'Yoga' },
    { id: 2, nombre: 'Spinning' },
  ];

  listar() {
    return this.clases;
  }

  buscar(id: number) {
    return this.clases.find((c) => c.id === id) ?? null;
  }
}
