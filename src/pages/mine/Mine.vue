<template>
  <div>
    mine
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
    console.log(this.showTabbar);
    this.updateShowTabbar(true);
  },
  methods: {
    ...mapMutations(['updateShowTabbar'])
  }
}
</script>

<style lang="less" scoped>

</style>
