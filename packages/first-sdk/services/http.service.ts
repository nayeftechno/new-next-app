import axios , {AxiosInstance} from "axios";
import {baseUrl} from "./baseUrl";
class HttpService{
    public httpClient : AxiosInstance;
    constructor(){
        this.httpClient = axios.create({
            baseURL : baseUrl
        });
    }
};
export const $http = new HttpService();