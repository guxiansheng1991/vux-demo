<template>
  <div class="my-tabber-wrapper">
    <!-- 
      (1)原生不兼容iPhone x
      (2)遮挡底部
      (3)不宜全局使用,因为除了四个页面之外,其他页面不使用; 需要封装tabbar组件,并保持状态统一
      (4)这里在tabbar-item 使用link是为了规避tabbar组件中刷新后又跳转到默认的tab上的问题
    -->
    <tabbar class="my-tabber" @on-index-change="handleIndexChange">
      <tabbar-item badge="3" :selected="currentTab == 'Home'" link="/Home">
        <img slot="icon" src="../../assets/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="currentTab == 'Brand'" link="/Brand">
        <img slot="icon" src="../../assets/brand.png">
        <span slot="label">品牌</span>
      </tabbar-item>
      <tabbar-item :selected="currentTab == 'Shoppingcart'" link="/Shoppingcart">
        <img slot="icon" src="../../assets/shopping-cart-o.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item :selected="currentTab == 'Mine'" link="/Mine">
        <img slot="icon" src="../../assets/mine.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import { Tabbar, TabbarItem } from 'vux';

export default {
  name: 'my-tabbar',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['currentTab'])
  },
  components: {
    Tabbar, TabbarItem
  },
  mounted () {},
  methods: {
    ...mapMutations(['updateCurrentTab']),
    handleIndexChange (to, from) {
      this.updateCurrentTab(this.$route.name);
    }
  }
}
</script>

<style lang="less" scoped>

.my-tabber-wrapper{
  width: 100%;
  height: auto;
  position: fixed;
  left: 0px;
  bottom: 0px;
  .my-tabber{
    position: absolute;
    background: #ffffff;
  }
  @supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
    .my-tabber{
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
    }
  }
}
</style>
