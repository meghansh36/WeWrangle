import {Injectable, OnModuleInit} from '@nestjs/common'
import {ModuleRef} from '@nestjs/core'
// import { EndBlock } from './endblock'

@Injectable()
export class RunnerService{

    // private endBlockService: EndBlock

    constructor(private moduleRef: ModuleRef) {}

    // async onModuleInit() {
    //     this.endBlockService = await this.moduleRef.create(EndBlock)
    // }

    async run() {
        const {EndBlock} = await import('./endblock')
        const service = new EndBlock()
        await service.execute()
    }


}