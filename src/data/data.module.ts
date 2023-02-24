import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ExchangeRatesApi } from './integrations';

@Module({
  imports: [HttpModule],
  providers: [ExchangeRatesApi],
  exports: [ExchangeRatesApi],
})
export class DataModule {}
