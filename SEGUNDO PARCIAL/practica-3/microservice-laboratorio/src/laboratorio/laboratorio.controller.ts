import { LaboratorioService } from './laboratorio.service'; // Importa el servicio de laboratorio
import { LaboratorioDTO } from './dto/laboratorio.dto'; // Importa el DTO de laboratorio
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LaboratorioMsg } from '../common/constans'; // Importa los mensajes de laboratorio

@Controller()
export class LaboratorioController {
  constructor(private readonly laboratorioService: LaboratorioService) {}

  @MessagePattern(LaboratorioMsg.CREATE)
  create(@Payload() laboratorioDTO: LaboratorioDTO) {
    return this.laboratorioService.create(laboratorioDTO);
  }

  @MessagePattern(LaboratorioMsg.FIND_ALL)
  findAll() {
    return this.laboratorioService.findAll();
  }

  @MessagePattern(LaboratorioMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.laboratorioService.findOne(id);
  }

  @MessagePattern(LaboratorioMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.laboratorioService.update(payload.id, payload.laboratorioDTO);
  }

  @MessagePattern(LaboratorioMsg.DELETE)
  delete(@Payload() id: string) {
    return this.laboratorioService.delete(id);
  }
}