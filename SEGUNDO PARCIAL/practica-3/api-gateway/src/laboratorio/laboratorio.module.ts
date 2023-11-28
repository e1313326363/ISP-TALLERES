import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { LaboratorioController } from './laboratorio.controller'; // Importa el controlador de laboratorio

@Module({
  imports: [ProxyModule],
  controllers: [LaboratorioController], // Usa el controlador de laboratorio en lugar del de estudiantes
})
export class LaboratorioModule {} // Cambia el nombre del módulo a LaboratorioModule
