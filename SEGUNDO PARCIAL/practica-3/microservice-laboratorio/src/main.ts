import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { RabbitMQ } from './common/constans'; // Asegúrate de tener los enums de RabbitMQ actualizados para laboratorios

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQP_URL],
      queue: RabbitMQ.LaboratorioQueue, // Usa la cola de laboratorios en lugar de la de estudiantes
    },
  });
  await app.listen();
  console.log('Microservice LABORATORIES is listening'); // Actualiza el mensaje para reflejar el nuevo microservicio
}
bootstrap();
