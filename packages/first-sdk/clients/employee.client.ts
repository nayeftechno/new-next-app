import {$http} from "../services/http.service";
const EmployeeClient={
    getAllEmployees(){
        return $http.getAllEmployees()?.then();
    },
};
export {EmployeeClient};