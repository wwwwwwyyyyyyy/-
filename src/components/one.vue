<template>
  <div class="app">
    <ul>
      <li v-for="item in Arr" v-bind:key="item">{{item}}</li>
    </ul>
    <button v-on:click="btn">走一走</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            Arr:['帅哥','美女','程序员']

        }
    },methods: {
        btn(){
            this.arr.push(arr[0])
            this.arr.shift()
        }
        
    }
};
</script>


<style scoped>
</style>