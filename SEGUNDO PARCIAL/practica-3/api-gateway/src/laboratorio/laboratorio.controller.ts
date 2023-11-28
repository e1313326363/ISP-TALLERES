import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LaboratorioMSG } from './../common/constants'; // Asegúrate de tener los mensajes de laboratorio definidos
import { Observable } from 'rxjs';
import { LaboratorioDTO } from './dto/laboratorio.dto'; // Importa el DTO de laboratorio
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { ILaboratorio } from 'src/common/interfaces/laboratorio.interface'; // Importa la interfaz de laboratorio

@ApiTags('laboratories') // Cambia el tag a 'laboratories' para reflejar la entidad
@Controller('api/v2/laboratory') // Cambia la ruta del controlador a 'laboratory'
export class LaboratorioController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyLaboratorio = this.clientProxy.clientProxyLaboratorios(); // Cambia al cliente proxy de laboratorios

  @Post()
  create(@Body() laboratorioDTO: LaboratorioDTO): Observable<ILaboratorio> {
    return this._clientProxyLaboratorio.send(LaboratorioMSG.CREATE, laboratorioDTO); // Usa el mensaje de creación de laboratorio
  }

  @Get()
  findAll(): Observable<ILaboratorio[]> {
    return this._clientProxyLaboratorio.send(LaboratorioMSG.FIND_ALL, ''); // Usa el mensaje para encontrar todos los laboratorios
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ILaboratorio> {
    return this._clientProxyLaboratorio.send(LaboratorioMSG.FIND_ONE, id); // Usa el mensaje para encontrar un laboratorio por ID
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() laboratorioDTO: LaboratorioDTO): Observable<ILaboratorio> {
    return this._clientProxyLaboratorio.send(LaboratorioMSG.UPDATE, { id, laboratorioDTO }); // Usa el mensaje para actualizar un laboratorio
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyLaboratorio.send(LaboratorioMSG.DELETE, id); // Usa el mensaje para eliminar un laboratorio por ID
  }
}
