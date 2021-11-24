import {$http} from "../services/http.service";
const UsersClient={
    async getAllUsers(){
        const response = await $http.get("/users");
        return response;
    },
    async getSingleUser(id : number){
        const response = await $http.get(`/users/${id}`);
        return response;
    }
};
export {UsersClient};