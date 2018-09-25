<template>
  <div id="app" :style="tabberStyle">
    <router-view></router-view>
    <my-tabbar v-if="showTabbar"></my-tabbar>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import MyTabbar from './components/common/MyTabbar';

export default {
  name: 'app',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['showTabbar']),
    // 当底部tabbar显示的时候,为app增加margin-bottom值,防止tabbar遮挡底部
    tabberStyle () {
      return {'margin-bottom': this.showTabbar ? '53px' : '0px'};
    }
  },
  components: {
    MyTabbar
  },
  created () {},
  methods: {
    ...mapMutations(['updateShowTabbar'])
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
  body {
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  } 
}
</style>
