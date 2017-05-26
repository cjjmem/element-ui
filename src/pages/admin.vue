<template>
  <div id="admin">
    <div id="main">
      <h1>{{ page }}</h1>
      123456
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        page:"admin"
      }
    }
  }

</script>

<style>

</style>