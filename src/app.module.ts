import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoDbConfig } from './config/mongo.config';
import { NumbersModule } from './numbers/numbers.module';
import { CalculatingModule } from './calculating/calculating.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    NumbersModule.forRoot({ value: 42 }),
    NumbersModule.forRootAsync({ value: 110 }),
    CalculatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
