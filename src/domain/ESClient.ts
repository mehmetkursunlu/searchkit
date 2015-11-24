import * as axios from "axios"
import * as _ from "lodash"
import * as rx from "rx";

export default class ESClient {

	query:any

	constructor(public host:string, public index:string){
	}

	searchUrl(){
		return [this.host, this.index, "_search"].join("/")
	}

	setQuery(query){
		this.query = query
	}

	search(){
		return axios.get(this.searchUrl(), this.query)
	}

}