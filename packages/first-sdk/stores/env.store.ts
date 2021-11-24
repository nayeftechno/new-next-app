import {computed} from "mobx";
class EnvStore{
    language : string;
    constructor(){
        this.language = "ar";
    }
};
export default EnvStore;