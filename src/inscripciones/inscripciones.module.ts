import { Module } from '@nestjs/common';
import { InscripcionesController } from './inscripciones.controller.js';
import { InscripcionesService } from './inscripciones.service.js';
import { INSCRIPCION_REPOSITORY } from './inscripciones.tokens.js';
import { InscripcionMemoriaRepository } from '../infra/inscripcion-memoria.repository.js'; // ajusta el nombre exacto del archivo

@Module({
  controllers: [InscripcionesController],
  providers: [
    InscripcionesService,
    { provide: INSCRIPCION_REPOSITORY, useClass: InscripcionMemoriaRepository },
  ],
})
export class InscripcionesModule {}
