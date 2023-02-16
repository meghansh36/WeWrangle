import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { RunnerService } from './process/runner'
// import build from './process/endblock'
import { writeFile } from 'node:fs'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private runnerService: RunnerService) {}

  @Get()
  async getData() {
    
    // let buildString = build({filePath: 'file.csv'})
    // console.log(__dirname)
    // writeFile(__dirname + '/runner/input.component.ts', buildString, 'utf-8', (err) => {


    //   console.log(err)
    // })

    await this.runnerService.buildFiles()

  }
}
