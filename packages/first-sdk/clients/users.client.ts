import {$http} from "../services/http.service";
const UsersClient={
    async getAllUsers(){
        const response = await $http.get("/users");
        console.log(response);
    }
};
export {UsersClient};