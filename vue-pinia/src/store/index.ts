import {App} from "vue";
import {createPinia} from "pinia";

export function installPinia(app:App){
    const Pinia = createPinia();
    app.use(Pinia)
}
