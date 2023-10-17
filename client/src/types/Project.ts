import ApiRecord from './ApiRecord.ts'

export default class PipelineType extends ApiRecord {
    static endpoint = 'projects';
    static model_name = 'project';
    static accepted_attributes = ['title', 'description', 'pipeline_type_id', 'pipeline_json']

    constructor();
    constructor(title, description, pipeline_type_id, pipeline_json);
    constructor(data);
    constructor(...args: Array<any>) { // TODO Il y a vraiment pas plus propre que ça ?!

        if (args.length == 0) {
            super()
            this.title = undefined
            this.description = undefined
            this.pipeline_type_id = undefined
            this.pipeline_json = undefined
        }
        else if (args.length == 4) {
            super()
            this.title = args[0] // title
            this.description = args[1] // description
            this.pipeline_type_id = args[2] // pipeline_type_id
            this.pipeline_json = args[3] // pipeline_json
        }
        else if (args.length == 1) {
            super(args[0]) // args[0] = Data
        }
        else {
            throw new Error("Bad arguments")
        }
    }
}