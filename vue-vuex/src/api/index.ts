import axios from "axios"

const request =axios.create({
    baseURL:'/api',
    timeout:10000
})

export function getDicData(key:string){
    return request.get("/dic?key="+key)
}
