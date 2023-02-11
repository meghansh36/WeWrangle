import { Injectable } from '@nestjs/common';
import * as dataForge from 'data-forge'
import 'data-forge-fs';
import * as path from 'path'
import {from, Subject, multicast, filter, toArray, lastValueFrom} from 'rxjs'

@Injectable()
export class AppService {
  
  loadCSV() {
    const csvPath = path.join(__dirname, '..', 'poc','assets', 'file.csv')
    
    const df: dataForge.DataFrame = dataForge.readFileSync(csvPath).parseCSV()
    
    let source = from(df.toArray())
    
    return source
  }

  input() {
    let inputStream =  this.loadCSV()

    // let subject = new Subject();
    return inputStream


  }


  async filter() {
    let inputStream = this.input()

    let temp = await lastValueFrom(inputStream.pipe(toArray()))

    console.log(temp)

    

    // let subject = new Subject()
    // return inputStream.pipe(filter(x => x['hello'] === '1'), multicast(subject))

  }


}
