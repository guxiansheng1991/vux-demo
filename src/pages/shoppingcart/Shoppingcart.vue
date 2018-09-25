<template>
  <div>
    shoppingcart
    <button @click="showPupup = true;">show popup</button>

    <popup v-model="showPupup">
      <div>
        <h1>this is popup</h1>
        <h1>this is popup</h1>
        <h1>this is popup</h1>
        <h1>this is popup</h1>
        <h1>this is popup</h1>
      </div>
    </popup>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import { Popup } from 'vux'

export default {
  name: 'shoppingcart',
  data () {
    return {
      showPupup: false
    }
  },
  computed: {
    ...mapGetters(['showTabbar'])
  },
  components: {
    Popup
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
