import { map } from 'rxjs'
import * as incomingStream from './partition'

export function execute() {

    let inputStream = incomingStream.execute()
    return inputStream.pipe(map(x => {
        x['hello'] = 10000
        return x
    }))

}