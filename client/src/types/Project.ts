import ApiRecord from './ApiRecord'
import Processing from './Processing'

export default class Project extends ApiRecord {
    static endpoint:string = 'projects';
    static modelName:string = 'project';
    static niceName:string = 'Project';
    static acceptedAttributes:Array<string> = ['title', 'description', 'pipeline_type_id', 'pipeline'];
    static nestedAttributes:Object = {processings: Processing};

    constructor();
    constructor(title:string, description:string, pipeline_type_id:number, pipeline:Object);
    constructor(json:Object);
    constructor(...args: Array<any>) { // TODO Il y a vraiment pas plus propre que ça ?!

        if (args.length == 0) {
            super()
            this.title = ""
            this.description = ""
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

        // TODO Het Data from back
        this.data_sample = {
            'headers': [
                {name: 'PMM', field: 'pmm'}, 
                {name: 'Smoker', field: 'smoker'}, 
                {name: 'ZQF', field: 'zqf'}, 
                {name: 'Gender', field: 'gender'}, 
                {name: 'Label', field: 'label'}
            ],
            'data': [
                {pmm: 12, smoker: 1, zqf: 342, gender: 'M', label: 1},
                {pmm: 19, smoker: 0, zqf: 22, gender: 'F', label: 0},
                {pmm: 5, smoker: 1, zqf: 32, gender: 'M', label: 0},
                {pmm: 3, smoker: 0, zqf: 89, gender: 'M', label: 0},
                {pmm: 19, smoker: 1, zqf: 2, gender: 'M', label: 1},
                {pmm: 9, smoker: 0, zqf: 1879, gender: 'F', label: 1},
                {pmm: 11, smoker: 1, zqf: 17, gender: 'F', label: 0},
                {pmm: 16, smoker: 0, zqf: 762, gender: 'M', label: 0},
                {pmm: 8, smoker: 1, zqf: 102, gender: 'M', label: 1},
                {pmm: 8, smoker: 0, zqf: 754, gender: 'M', label: 1}
            ]
        }
    }

    bestProcessing() {
        if(this.processings) {
            let best = {index: 0, value: this.processings[0].bestResult()?.mainMetric().value}

            for(let index in this.processings.slice(1)) {
                let newValue = this.processings[index].bestResult()?.mainMetric().value 
                if(newValue !== undefined && best.value === undefined || newValue > best.value) {
                    best.index = index
                    best.value = newValue
                }
            }
            
            return this.processings[best.index]
        }
        else
            return undefined
    }
}