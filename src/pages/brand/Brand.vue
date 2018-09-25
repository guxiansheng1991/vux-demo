<template>
  <div>
    <h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1>
    <h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1>
    <h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1>
    <h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1>
    <h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1>
    <h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1><h1>{{scrollHeight}}</h1>
    
    <button @click="showDialog = true;">show dialog</button>
    <!-- <div>
      <x-dialog v-model="showDialog" hide-on-blur @on-show="show" @on-hide="hide">
        <div>
          <h1>dialog</h1>
        </div>
      </x-dialog>
    </div> -->
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

export default {
  name: 'brand',
  data () {
    return {
      showDialog: false,
      scrollHeight: 0
    }
  },
  computed: {
    ...mapGetters(['showTabbar'])
  },
  components: {
    MyDialog
  },
  created () {
    this.updateShowTabbar(true);
  },
  methods: {
    ...mapMutations(['updateShowTabbar']),
    show () {
      this.scrollHeight = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.height = '100%';
    },
    hide () {
      document.body.style.position = 'relative';
      document.body.style.height = 'auto';
      window.scrollTo(0, this.scrollHeight);
    }
  }
}
</script>

<style lang="less" scoped>

</style>
