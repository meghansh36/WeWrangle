import * as dataForge from 'data-forge'
import 'data-forge-fs';
import * as path from 'path'
import {from} from 'rxjs'

export function execute() {
    const csvPath = path.join(__dirname, '..', 'poc','assets', 'file.csv')
    
    const df: dataForge.DataFrame = dataForge.readFileSync(csvPath).parseCSV()
    
    let source = from(df.toArray())
    
    return source
}
