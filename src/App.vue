<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style lang="sass">
  @import "sass/index.sass";
  body,p,a,span,ul,li{
    margin: 0;
    padding: 0;
  }

</style>
