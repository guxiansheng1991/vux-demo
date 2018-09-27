<i18n>
  hello:
    en: hello vue
    zh-CN: 你好Vue
    tw: 你號Vue
</i18n>
<template>
  <div>
    mine
    <h2>{{$t('hello')}}</h2>
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
