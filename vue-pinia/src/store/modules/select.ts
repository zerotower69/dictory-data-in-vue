import {defineStore} from "pinia";
import {getDicData} from "@/api";

export const useSelectStore =defineStore('select',{
    state:()=>{
        return{
            dicData:{}
        }
    },
    actions:{
        setDic(key:string,list:any[]){
            this.dicData[key]=list;
        },
       async getDic(key:string){
            console.log(this.dicData)
            if(this.dicData[key]){
                return this.dicData[key]
            } else{
                const data =(await getDicData(key)).data;
                const list = data.map(item=>({
                    value: item.key || item.code,
                    label: item.value || item.name
                }));
                this.setDic(key,list);
                return list;
            }
        }
    }
})
