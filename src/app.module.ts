import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { EventoModule } from './Evento/evento.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ProyectosAutoma:proyectos12345@principal.qsckrkk.mongodb.net/Proyectos'),
    EventoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
