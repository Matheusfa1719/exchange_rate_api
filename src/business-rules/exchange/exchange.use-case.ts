import { Injectable } from '@nestjs/common';
import { ExchangeRatesApi } from 'src/data/integrations';

@Injectable()
export class ExchangeUseCases {
  constructor(private exchangeRatesApi: ExchangeRatesApi) {}

  async getLatestExchangeRates(token: string) {
    const latestValues = await this.exchangeRatesApi.getLatestExchanges(token);
    //Round values to show cool
    return latestValues;
  }
}
