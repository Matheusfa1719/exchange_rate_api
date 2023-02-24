import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { ExchangeUseCases } from './exchange/exchange.use-case';

@Module({
  imports: [DataModule],
  providers: [ExchangeUseCases],
  exports: [ExchangeUseCases],
})
export class BusinessRules {}
