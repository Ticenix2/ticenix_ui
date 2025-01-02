import {axios} from "axios";
import { fetchall } from "./dc";

const baseUrl = "http://localhost:5260/api";

export default {
    Customerdbs(url = baseUrl + 'CustomerDBs/'){
        return {
            fetchall : ()=> axios.get(url),
            fetchById : ()=>axios.get(url + id),
            create : newRecord => axios.post(url,newRecord),
            update : nUpdate => axios.put(url + id, nUpdate),
            delete : nDelete => axios.delete(url+id)

        }
    }
}