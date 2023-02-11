import { Injectable, } from '@nestjs/common';
import { delay, lastValueFrom, toArray } from 'rxjs';
import * as incomingStream1 from './function' 

@Injectable()
export class EndBlock {

    constructor() {}

    async execute() {
        let value = await lastValueFrom(incomingStream1.execute().pipe(toArray(), delay(5000)))
        console.log(value)
    }

}