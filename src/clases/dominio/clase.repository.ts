import { ClasesService } from "../clases.service.js";
import { CrearClaseDto } from "../dto/crear-clase.dto.js";
import { ActualizarClaseDto } from "../dto/editar-clase.dto.js";

export interface ClaseRepository{
    listar(): Promise<ClasesService[]>;
    buscarPorId(id: number): Promise<ClasesService | null>;
    crear(datos: CrearClaseDto): Promise<ClasesService>;
    actualizar(id: number, datos: ActualizarClaseDto): Promise<ClasesService | null>;
    eliminar(id: number): Promise<ClasesService | null>;
}