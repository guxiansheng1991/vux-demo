<template>
  <!-- <div class="innersect-wrapper" :style="wrapperStyle"> -->
  <div class="innersect-wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: 'brand',
  data () {
    return {
      scroll: null
    }
  },
  computed: {
    wrapperStyle () {
      return {'height': this.height + 'px'};
    }
  },
  props: {
    height: {
      type: Number,
      default: 200
    }
  },
  components: {
    BScroll
  },
  methods: {
    init () {
      this.scroll = new BScroll('.innersect-wrapper', {
        scrollY: true,
        click: true,
        dblclick: true
      });
    }
  }
}
</script>

<style lang="less" scoped>
.innersect-wrapper {
  overflow-y: scroll;
  height: 300px;
}
</style>
