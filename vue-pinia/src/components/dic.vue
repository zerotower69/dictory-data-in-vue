<template>
    <h1>{{name}}</h1>
    <el-select v-model="selected">
        <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.value"></el-option>
    </el-select>

  <el-button type="primary" @click="update">更新</el-button>
</template>

<script setup>
import {ref, getCurrentInstance, onBeforeUpdate, onMounted} from "vue";
import {useSelectStore} from "@/store/modules/select"
const props=defineProps({
    requestKey:{
        type:String
    },
    name:String
})
const selectStore= useSelectStore();
let vm ;

function update(){
    vm.$forceUpdate();
}

onMounted(()=>{
    getData()
    vm = getCurrentInstance().proxy;
})

function getData(){
   selectStore.getDic(props.requestKey).then(res=>{
       options.value=res;
   })
}

onBeforeUpdate(()=>{
    getData()
})

const selected =ref('')
const options=ref([]);
</script>
