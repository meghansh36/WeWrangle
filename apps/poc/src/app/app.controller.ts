import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { RunnerService } from './process/runner'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private runnerService: RunnerService) {}

  @Get()
  async getData() {
    await this.runnerService.run()

    // inputStream.subscribe({
    //   next: (v) => console.log(`observerA: ${JSON.stringify(v)}`)
    // })


    // inputStream.connect()
  }
}
