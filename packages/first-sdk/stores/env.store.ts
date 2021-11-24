import {computed} from "mobx";
class EnvStore{
    language : string;
    constructor(){
        this.language = "ar";
    }

    @computed
    get getLanguage():string{
        return this.language;
    }
};
export default EnvStore;