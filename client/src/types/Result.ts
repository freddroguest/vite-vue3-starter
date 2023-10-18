import ApiRecord from './ApiRecord'

export default class Result extends ApiRecord {
    static endpoint:string = 'results';
    static modelName:string = 'result';
    static niceName:string = 'Result';
    static acceptedAttributes:Array<string> = ['processing_id', 'computed_metric', 'ml_model_name', 'ml_model_parameters'];

    constructor();
    constructor(processing_id:string, computed_metric:Object, ml_model_name:string, ml_model_parameters:Object);
    constructor(json:Object);
    constructor(...args: Array<any>) { // TODO Il y a vraiment pas plus propre que ça ?!

        if (args.length == 0) {
            super()
            this.processing_id = ""
            this.computed_metric = ""
            this.ml_model_name = undefined
            this.ml_model_parameters = undefined
        }
        else if (args.length == 4) {
            super()
            this.processing_id = args[0] // processing_id
            this.computed_metric = args[1] // computed_metric
            this.ml_model_name = args[2] // ml_model_name
            this.ml_model_parameters = args[3] // ml_model_parameters
        }
        else if (args.length == 1) {
            super(args[0]) // args[0] = json
        }
        else {
            throw new Error("Bad arguments")
        }
    }

    mainMetric() {
        const key = Object.keys(this.computed_metric)[0]
        return {name: key, value: this.computed_metric[key]}
    }
}