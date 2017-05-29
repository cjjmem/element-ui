<template>
  <div id="admin">
    <Headers></Headers>
    <Asides></Asides>
    <div id="content">
      <router-view></router-view>

      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple">222</div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple-light">333</div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple">44</div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple-light">333</div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Headers from './layout/header.vue'
  import Asides from './layout/aside.vue'

  export default{
    data(){
      return {
        page: "admin"
      }
    },
    components: {
      Headers,
      Asides
    }
  }

</script>

<style lang="sass" scoped>
  #content{
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    width: auto;
    padding: 40px;
    box-sizing: border-box;
    overflow-y: scroll;
  }
</style>