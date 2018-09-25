<template>
  <div>
    <div>
      <x-dialog v-model="myShowDialog" :hide-on-blur="hideOnBlur" @on-show="show" @on-hide="hide">
        <div>
          <h1>dialog</h1>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
import { XDialog } from 'vux';

export default {
  name: 'my-dialog',
  data () {
    return {
      myShowDialog: false,
      scrollHeight: 0
    }
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    hideOnBlur: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    showDialog (val) {
      this.myShowDialog = val;
    }
  },
  components: {
    XDialog
  },
  methods: {
    show () {
      this.scrollHeight = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.height = '100%';
      this.$emit('show', this.myShowDialog);
    },
    hide () {
      document.body.style.position = 'relative';
      document.body.style.height = 'auto';
      window.scrollTo(0, this.scrollHeight);
      this.$emit('hide', this.myShowDialog);
    }
  }
}
</script>

<style lang="less" scoped>

</style>
