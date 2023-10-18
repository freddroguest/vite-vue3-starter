import axios from 'axios'
import {app} from '@/main'; // Used to get Toast 
// import router from '../router';
export default class ApiRecord {
    static url:string = 'http://127.0.0.1:3000';
    static acceptedAttributes:Array<string> = []
    static nestedAttributes:Object = {};
    static modelName:string = '';
    static niceName:string = '';
    static endpoint:string = '';
    

    constructor(json?:Object) {
        if(json) {
            this.updateAttributes(json)
        }
    }

    updateAttributes(json:Object) {
        const acceptedAttributes = this.constructor.acceptedAttributes.concat(['id'])
        for(const attribute of acceptedAttributes)
            if(Object.keys(json).includes(attribute))
                this[attribute] = json[attribute]

        // Nested attributes
        for(const key of Object.keys(this.constructor.nestedAttributes)) {
            if(json[key]) {
                this[key] = Array.from(json[key].map((value) => {
                    return new this.constructor.nestedAttributes[key](value)
                }))
            }
        }
    }

    static async getAll(params={}): Array<ApiRecord> {
        const createChild = (json) => {
            return new this(json)
        }

        const result = await axios.get(`${this.url}/${this.endpoint}`, { params: params });

        return Array.from(result.data.map(createChild));
    }

    static async find(id): ApiRecord {
        const result = await axios.get(`${this.url}/${this.endpoint}/${id}`);
        return new this(result.data);
    }

    async fetch(): ApiRecord {
        if(this.id !== undefined) { // Get value from API
            return this.constructor.find(this.id)
        }
        else { // No id -> No in the jsonbase yet so don't need to fetch
            return this
        }
    }

    async destroy(): boolean {
        if(this.id !== undefined) {
            try {
                await axios.delete(`${this.constructor.url}/${this.constructor.endpoint}/${this.id}`)
                this.sendToast("Deleted with success !")
                return true
            }
            catch {
                this.sendToast("An error occurred while deleting...", severity='error')
                return false
            }
        }
        else { 
            this.sendToast("Nothing to delete", severity='warn')
            return false
        }
    }

    async save(params={}): boolean {

        // Create json object to push
        let jsonObject = {}
        jsonObject[this.constructor.modelName] = {}
        for(const attribute of this.constructor.acceptedAttributes)
            jsonObject[this.constructor.modelName][attribute] = this[attribute]

        if(this.id) { // UPDATE
            try {
                const result = await axios.patch(
                    `${this.constructor.url}/${this.constructor.endpoint}/${this.id}`,
                    jsonObject
                );   
                this.sendToast("Updated with success !")
            }
            catch {
                this.sendToast("An error occurred while updating...", severity='error')
            }
        }
        else { // CREATE
            try {
                const result = await axios.post(
                    `${this.constructor.url}/${this.constructor.endpoint}`,
                    jsonObject
                ); 
                
                this.updateAttributes(result.data)   
                this.sendToast("Created with success !")
            }
            catch {
                this.sendToast("An error occurred while updating...", severity='error')
            }
        }
        return true;
    }

    async show(): void {
        import('../router').then((router) => {
            router.default.push({name: this.constructor.modelName, params: {id: this.id}})
        })
    }

    sendToast(message:string, severity:string='success'): void {
        app.config.globalProperties.$toast.add({ severity: severity, summary: this.constructor.niceName, detail: message, life: 3000 });
    }
}

