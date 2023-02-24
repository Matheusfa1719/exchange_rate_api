import { Controller, Get, Param } from '@nestjs/common';
import { ExchangeUseCases } from 'src/business-rules/exchange/exchange.use-case';

@Controller('api/exchange')
export class ExchangeController {
  constructor(private exchangeUseCases: ExchangeUseCases) {}

  @Get(':id')
  teste(@Param('id') id: string) {
    return this.exchangeUseCases.getLatestExchangeRates(id);
  }
}
