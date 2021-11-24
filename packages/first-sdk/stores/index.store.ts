import EnvStore from "./env.store";
import PageStore from "./page.store";
class IndexStore{
    env : EnvStore;
    page : PageStore
    constructor(){
        this.env = new EnvStore();
        this.page = new PageStore();
    }
};
export default IndexStore;