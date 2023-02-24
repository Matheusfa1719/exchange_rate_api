import { Module } from '@nestjs/common';
import { BusinessRules } from './business-rules/business-rules.module';
import { ExchangeController } from './controllers/exchanges.controller';
import { DataModule } from './data/data.module';

@Module({
  imports: [DataModule, BusinessRules],
  controllers: [ExchangeController],
  providers: [],
})
export class AppModule {}
