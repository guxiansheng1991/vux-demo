<template>
  <div>
    <h1>product detail</h1><h1>product detail</h1><h1>product detail</h1><h1>product detail</h1>
    <h1>product detail</h1><h1>product detail</h1><h1>product detail</h1><h1>product detail</h1>
    <h1>product detail</h1><h1>product detail</h1><h1>product detail</h1><h1>product detail</h1>
    <h1>product detail</h1><h1>product detail</h1><h1>product detail</h1><h1>product detail</h1>
    <h1>product detail</h1><h1>product detail</h1><h1>product detail</h1><h1>product detail</h1>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: 'product-detail',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['showTabbar'])
  },
  created () {
    this.updateShowTabbar(false);
  },
  methods: {
    ...mapMutations(['updateShowTabbar'])
  }
}
</script>

<style lang="less" scoped>

</style>
