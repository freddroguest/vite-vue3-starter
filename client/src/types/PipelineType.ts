import ApiRecord from './ApiRecord'

export default class PipelineType extends ApiRecord {
    static endpoint:string = 'pipeline_types';
    static modelName:string = 'pipeline_type';
    static niceName:string = 'Pipeline type';
    static acceptedAttributes:Array<string> = ['title', 'description', 'image'];

    constructor();
    constructor(title:string, description:string, image:string);
    constructor(json:Object);
    constructor(...args: Array<any>) { // TODO Il y a vraiment pas plus propre que ça ?!

        if (args.length == 0) {
            super()
            this.title = ""
            this.description = ""
        }
        else if (args.length == 3) {
            super()
            this.title = args[0] // title
            this.description = args[1] // description
            this.image = args[2] // description
        }
        else if (args.length == 1) {
            super(args[0]) // args[0] = json
        }
        else {
            throw new Error("Bad arguments")
        }
    }
}