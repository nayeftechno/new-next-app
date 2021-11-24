import {$http} from "../services/http.service";
const UsersClient={
    async getAllUsers(){
        const response = await $http.get("/users");
        return response;
    }
};
export {UsersClient};