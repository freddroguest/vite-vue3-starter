import ApiRecord from './ApiRecord.ts'

export default class PipelineType extends ApiRecord {
    static endpoint = 'pipeline_types';
    static model_name = 'pipeline_type';
    static accepted_attributes = ['title', 'description']

    constructor();
    constructor(title, description);
    constructor(data);
    constructor(...args: Array<any>) { // TODO Il y a vraiment pas plus propre que ça ?!

        if (args.length == 0) {
            super()
            this.title = undefined
            this.description = undefined
        }
        else if (args.length == 2) {
            super()
            this.title = args[0] // title
            this.description = args[1] // description
        }
        else if (args.length == 1) {
            super(args[0]) // args[0] = Data
        }
        else {
            throw new Error("Bad arguments")
        }
    }
}