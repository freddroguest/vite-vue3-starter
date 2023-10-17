import axios from 'axios'

export default class ApiRecord {
    static url = 'http://127.0.0.1:3000';
    static accepted_attributes = []
    static endpoint = '';

    constructor(data?) {
        if(data) {
            this.updateAttributes(data)
        }
    }

    updateAttributes(data) {
        const accepted_attributes = this.constructor.accepted_attributes.concat(['id'])
        for(const attribute of accepted_attributes)
            if(Object.keys(data).includes(attribute))
                this[attribute] = data[attribute]
    }

    static async getAll(params={}): Array<ApiRecord> {
        const createChild = (json) => {
            return new this(json)
        }

        const res = await axios.get(`${this.url}/${this.endpoint}`, { params: params });

        return Array.from(res.data.map(createChild));
    }

    static async find(id): ApiRecord {
        const res = await axios.get(`${this.url}/${this.endpoint}/${id}`);
        return new this(res.data);
    }

    async fetch(): ApiRecord {
        if(this.id !== undefined) { // Get value from API
            return this.constructor.find(this.id)
        }
        else { // No id -> No in the database yet so don't need to fetch
            return this
        }
    }

    async destroy(): boolean {
        if(this.id !== undefined) {
            try {
                await axios.delete(`${this.constructor.url}/${this.constructor.endpoint}/${this.id}`)
                return true
            }
            catch {
                return false
            }
        }
        else { 
            return false
        }
    }

    async save(params={}): boolean {

        // Create json object to push
        let json_object = {}
        json_object[this.constructor.model_name] = {}
        for(const attribute of this.constructor.accepted_attributes)
            json_object[this.constructor.model_name][attribute] = this[attribute]


        if(this.id) { // UPDATE
            const res = await axios.patch(
                `${this.constructor.url}/${this.constructor.endpoint}/${this.id}`,
                json_object
            );   
        }
        else { // CREATE
            const res = await axios.post(
                `${this.constructor.url}/${this.constructor.endpoint}`,
                json_object
            ); 
            
            this.updateAttributes(res.data)   
        }
        return true;
    }
}

