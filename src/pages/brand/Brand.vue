<template>
  <div>
    <my-scroll height="500">
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
    ...mapMutations(['updateShowTabbar'])
  }
}
</script>

<style lang="less" scoped>

</style>
