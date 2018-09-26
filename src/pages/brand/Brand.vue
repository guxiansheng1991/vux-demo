<template>
  <div>
    <my-scroll :height="500" v-on:down="pullingDown" v-on:up="pullingUp">
      <div>
        <h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1>
        <h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1>
        <h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1>
        <h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1>
      </div>
    </my-scroll>
    
    <button @click="showDialog = true;">show dialog</button>
    <my-dialog
      :show-dialog="showDialog" 
      :hide-on-blur="true" 
      v-on:show="showDialog = true;" 
      v-on:hide="showDialog = false;">
    </my-dialog>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import MyDialog from '../../components/common/MyDialog';
import MyScroll from '../../components/common/MyScroll';

export default {
  name: 'brand',
  data () {
    return {
      showDialog: false
    }
  },
  computed: {
    ...mapGetters(['showTabbar'])
  },
  components: {
    MyDialog, MyScroll
  },
  created () {
    this.updateShowTabbar(true);
  },
  methods: {
    ...mapMutations(['updateShowTabbar']),
    pullingDown (finish) {
      window.setTimeout(() => {
        finish();
      }, 2000);
    },
    pullingUp (finish) {
      window.setTimeout(() => {
        // 可以传入true/false, 传入true代表已经加载完毕全部数据
        finish();
      }, 2000);
    }
  }
}
</script>

<style lang="less" scoped>

</style>
