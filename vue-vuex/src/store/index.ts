import {createStore } from "vuex"
import {getDicData} from "../api";

const store =createStore({
    state:{
        dicData:{

        }
    },
    mutations:{
        getDic(state:any,key:string){
            return state.dicData[key]
        },
        setDic(state:any,data:{key:string;list:any[]}){
            const {key,list} =data;
            state.dicData[key]=list
        }
    },
    actions:{
        async GET_DIC(context:any,payload:any){
            const {key} = payload
            if(context.state.dicData[key]){
                return context.state.dicData[key]
            } else{
                const data =(await getDicData(key)).data
                const list = data.map(item=>({
                    value: item.key || item.code,
                    label: item.value || item.name
                }))
                context.commit('setDic',{key:key,list:list});
                return list
            }
        }
    }
})

export  default store
