import axios , {AxiosInstance} from "axios";
import {baseUrl} from "./baseUrl";
class HttpService{
    public httpClient : AxiosInstance;
    constructor(){
        this.httpClient = axios.create({
            baseURL : baseUrl
        });
    }
    getAllEmployees(){
        try {
            const url = "";
            return new Promise((resolve,reject)=>{
                this.httpClient.get(url).then(({data})=>{resolve(data)}).catch((error)=>{reject(error)});
            });
        } catch (error) {
            console.error(error);
        }
    }
};
export const $http = new HttpService();
/////////