import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class ExchangeRatesApi {
  private readonly logger = new Logger(ExchangeRatesApi.name);
  constructor(private readonly httpService: HttpService) {}

  //Avaliar o tipo da resposta mapear retorno da API
  //Estudar rxjs
  async getLatestExchanges(token: string) {
    const observable = await this.httpService
      .get(`https://openexchangerates.org/api/latest.json?app_id=${token}`)
      .pipe(map((res) => res.data));
    return await lastValueFrom(observable);
  }
}
