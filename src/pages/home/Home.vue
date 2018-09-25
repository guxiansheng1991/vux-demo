<template>
  <div>
    <h1>home</h1><h1>home</h1><h1>home</h1><h1>home</h1><h1>home</h1>
    <h1>home</h1><h1>home</h1><h1>home</h1><h1>home</h1><h1>home</h1>
    <h1>home</h1><h1>home</h1><h1>home</h1><h1>home</h1><h1>home</h1>
    <h1>home</h1><h1>home</h1><h1>home</h1><h1>home</h1><h1>home</h1>
    <h1>home</h1><h1>home</h1><h1>home</h1><h1>home</h1><h1>home</h1>
    <h1>home</h1><h1>home</h1><h1>home</h1><h1>home</h1><h1>home</h1>
    <button @click="test">跳转</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: 'home',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['showTabbar'])
  },
  created () {
    console.log(this.showTabbar);
    this.updateShowTabbar(true);
  },
  methods: {
    ...mapMutations(['updateShowTabbar']),
    test () {
      this.$router.push({name: 'ProductDetail'});
    }
  }
}
</script>

<style lang="less" scoped>

</style>
