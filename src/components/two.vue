<template>
    <div class="app">
        <ul>
            <li v-for="(item,index) in arr" :key="item">
            <span>{{item}}</span>
            <button @click="btn(index)">删除 </button>
            </li>
        </ul>

        <button @click="add">生成</button>

    </div>
</template>

<script>
export default {
    data(){
        return {
            arr:[1,5,3]
        }
    },
    methods: {
        btn(index){
        // this.arr.shift()
        this.arr.splice(index, 1);
        },
        add(){
        this.arr.push(Math.ceil(Math.random() * 20));
        }
    }
    
}
</script>

<style scoped>

</style>