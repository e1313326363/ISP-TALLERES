import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LaboratorioModule } from './laboratorio/laboratorio.module'; // Importa el módulo de laboratorio

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    LaboratorioModule, // Usa el módulo de laboratorio en lugar del de estudiantes
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
