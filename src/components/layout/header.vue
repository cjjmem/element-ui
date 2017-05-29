<template>
  <div id="header" class="header">
    {{ page }}
  </div>
</template>

<script>
  export default{
    data(){
      return{
        page: 'headers'
      }
    }
  }
</script>

<style lang="sass" scoped>
  .header{
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    color: #fff;
    background-color: aquamarine;
    span {
      font-size: 16px;
    }
  }
</style>