import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { EventoModule } from './Evento/evento.module';
import 'dotenv/config';

const URL = process.env.MONGODB;

@Module({
  imports: [
    MongooseModule.forRoot(URL),
    EventoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
