<template>
  <div>
    mine
    {{ $t("message.test") }}
    <button @click="changeZh">中文</button>
    <button @click="changeEn">英文</button>
    <alert v-model="show2" :button-text="$t('vux.vux_alert_button_text')" :title="$t('message.test')" :content="$t('common.test')"></alert>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import { Alert } from 'vux'

export default {
  name: 'mine',
  data () {
    return {
      show2: true
    }
  },
  computed: {
    ...mapGetters(['showTabbar'])
  },
  components: {
    Alert
  },
  created () {
    this.updateShowTabbar(true);
  },
  methods: {
    ...mapMutations(['updateShowTabbar']),
    changeZh () {
      this.$i18n.locale = 'zh-CN';
    },
    changeEn () {
      console.log(this.$i18n);
      this.$i18n.locale = 'en';
    }
  }
}
</script>

<style lang="less" scoped>

</style>
