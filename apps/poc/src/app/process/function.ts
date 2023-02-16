
// const buildImports = (inputs) => {

//     let imports = []
//     let counter = 0

//     for(let input of inputs) {
//         const {node_id, node_connection_name} = input
//         imports.push(``)
//     }

//     return imports.join("/n")
// }


const build = (params: any) => {


    return `import { map } from 'rxjs'
    import * as incomingStream from './${params.input[0].node_id}'
    
    export function execute() {
    
        let inputStream = incomingStream['${params.input[0].node_connection_name}'].execute()
        inputStream.pipe(map(x => {
            x['hello'] = 10000
            return x
        }))

        return {input: inputStream}
    
    }`

}

export default build


