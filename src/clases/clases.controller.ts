import { Controller, Get, Param } from '@nestjs/common';
import { ClasesService } from './clases.service.js';

@Controller('clases')
export class ClasesController {
    constructor(private readonly servicio: ClasesService){}

    @Get()
    listar(){
        return this.servicio.listar();
    }

    @Get(':id')
    buscar(@Param('id') id: string){
        return this.servicio.buscar(Number(id));
    }
}
