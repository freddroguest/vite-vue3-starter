import ApiRecord from './ApiRecord.ts'

export default class Project extends ApiRecord {
    static endpoint = 'projects';
    static modelName = 'project';
    static niceName = 'Project';
    static acceptedAttributes = ['title', 'description', 'pipeline_type_id', 'pipeline']

    constructor();
    constructor(title, description, pipeline_type_id, pipeline);
    constructor(json);
    constructor(...args: Array<any>) { // TODO Il y a vraiment pas plus propre que ça ?!

        if (args.length == 0) {
            super()
            this.title = undefined
            this.description = undefined
            this.pipeline_type_id = undefined
            this.pipeline = undefined
        }
        else if (args.length == 4) {
            super()
            this.title = args[0] // title
            this.description = args[1] // description
            this.pipeline_type_id = args[2] // pipeline_type_id
            this.pipeline = args[3] // pipeline
        }
        else if (args.length == 1) {
            super(args[0]) // args[0] = json
        }
        else {
            throw new Error("Bad arguments")
        }
    }
}