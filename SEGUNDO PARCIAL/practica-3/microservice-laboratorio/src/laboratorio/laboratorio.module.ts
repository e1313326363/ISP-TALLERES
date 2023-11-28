import { Module } from '@nestjs/common';
import { LaboratorioService } from './laboratorio.service'; // Importa el servicio de laboratorio
import { LaboratorioSchema } from './schema/laboratorio.schema'; // Importa el esquema de laboratorio
import { LABORATORIO } from 'src/common/models/models'; // Importa la constante para el nombre del laboratorio
import { MongooseModule } from '@nestjs/mongoose';
import { LaboratorioController } from './laboratorio.controller'; // Importa el controlador de laboratorio

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: LABORATORIO.name, // Usa el nombre de la constante LABORATORIO
        useFactory: () => LaboratorioSchema, // Utiliza el esquema de laboratorio
      },
    ]),
  ],
  controllers: [LaboratorioController], // Usa el controlador de laboratorio
  providers: [LaboratorioService], // Usa el servicio de laboratorio
})
export class LaboratorioModule {} // Renombra el módulo a LaboratorioModule
