import {$http} from "../services/http.service";
import {END_POINTS} from "../constants";
const UsersClient={
    async getAllUsers(){
        const response = await $http.get(END_POINTS.USERS);
        return response;
    },
    async getSingleUser(id : number){
        const response = await $http.get(`${END_POINTS.USERS}/${id}`);
        return response;
    }
};
export {UsersClient};