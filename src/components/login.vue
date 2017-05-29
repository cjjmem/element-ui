<template>
  <div id="admin">
    <div id="main">
      <h1>{{ page }}</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        page:"login"
      }
    }
  }

</script>

<style>

</style>