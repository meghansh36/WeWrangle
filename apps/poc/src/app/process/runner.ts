import {Injectable} from '@nestjs/common'
import { writeFile } from 'node:fs/promises'
// import { EndBlock } from './endblock'

@Injectable()
export class RunnerService{

    // private endBlockService: EndBlock

    constructor() {}

    mockJSON = {
        
        node1: {
            input: [{node_id: 'node0', node_connection_name: 'input'}],
            output: [],
            node_props: {},
            nodeType: 'function'
        },

        node0: {
            input: [],
            output: [{node_id: 'node1'}],
            node_props: {},
            nodeType: 'inputCSV'
        },

    }

    
    async buildFiles() {

        let build = await import('./function')
        let templateString = build.default(this.mockJSON.node1)
        console.log(templateString)
        await writeFile(__dirname + `/runner/node1.ts`, templateString, 'utf-8')

    }

    
    
    async run() {
        const {EndBlock} = await import('./endblock')
        const service = new EndBlock()
        await service.execute()
    }


}