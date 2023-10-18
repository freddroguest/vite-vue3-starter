import ApiRecord from './ApiRecord'
import Result from './Result'

export default class Processing extends ApiRecord {
    static endpoint:string = 'processings';
    static modelName:string = 'processing';
    static niceName:string = 'Processing';
    static acceptedAttributes:Array<string> = ['start_at', 'end_at', 'project_id', 'pipeline', 'status'];
    static nestedAttributes:Object = {results: Result};

    constructor();
    constructor(start_at:Date, end_at:Date, project_id:number, pipeline:Object, status:string);
    constructor(json:Object);
    constructor(...args: Array<any>) { // TODO Il y a vraiment pas plus propre que ça ?!

        if (args.length == 0) {
            super()
            this.start_at = undefined
            this.end_at = undefined
            this.project_id = undefined
            this.pipeline = undefined
            this.status = undefined
        }
        else if (args.length == 4) {
            super()
            this.start_at = args[0] // start_at
            this.end_at = args[1] // end_at
            this.project_id = args[2] // project_id
            this.pipeline = args[3] // pipeline
            this.status = args[4] // status
        }
        else if (args.length == 1) {
            super(args[0]) // args[0] = json
        }
        else {
            throw new Error("Bad arguments")
        }
    }

    bestResult() {
        if(this.results) {
            let bestIndex = 0

            for(let index in this.results.slice(1))
                if(this.results[index].mainMetric().value > this.results[bestIndex].mainMetric().value)
                    bestIndex = index

            return this.results[bestIndex]
        }
        else
            return undefined
    }
}