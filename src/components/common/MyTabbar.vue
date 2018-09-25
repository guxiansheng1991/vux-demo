<template>
  <div class="my-tabber-wrapper">
    <!-- 
      (1)原生不兼容iPhone x
      (2)遮挡底部
      (3)不宜全局使用,因为除了四个页面之外,其他页面不使用; 需要封装tabbar组件,并保持状态统一
    -->
    <tabbar class="my-tabber" @on-index-change="handleIndexChange">
      <tabbar-item badge="3" selected>
        <img slot="icon" src="../../assets/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../assets/brand.png">
        <span slot="label">品牌</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../assets/shopping-cart-o.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../assets/mine.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux';

export default {
  name: 'my-tabbar',
  data () {
    return {}
  },
  props: {
  },
  components: {
    Tabbar, TabbarItem
  },
  mounted () {},
  methods: {
    handleIndexChange (to, from) {
      switch (to) {
        case 0 :
          this.$router.push({name: 'Home'});
          break;
        case 1 :
          this.$router.push({name: 'Brand'});
          break;
        case 2 :
          this.$router.push({name: 'Shoppingcart'});
          break;
        case 3 :
          this.$router.push({name: 'Mine'});
          break;
        default : {
          this.$router.push({name: 'Home'});
          break;
        }
      }
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
