<template>
  <div>
    mine
    <button>中文</button>
    <button>英文</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: 'mine',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['showTabbar'])
  },
  created () {
    this.updateShowTabbar(true);
  },
  methods: {
    ...mapMutations(['updateShowTabbar'])
  }
}
</script>

<style lang="less" scoped>

</style>
