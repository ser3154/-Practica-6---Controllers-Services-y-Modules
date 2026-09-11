import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { InscripcionesModule } from './inscripciones/inscripciones.module.js';

@Module({
  imports: [InscripcionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}