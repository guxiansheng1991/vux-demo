<template>
  <div class="innersect-wrapper" ref="wrapper" :style="wrapperStyle">
    <div class="content">
      <transition name="fade">
        <div class="pulling-down" v-show="pullingDownFlag">
          <slot name="pullingdown">
            <div>
              <img src="./refresh.gif">
            </div>
          </slot>
        </div>
      </transition>
      <slot></slot>
      <transition name="fade">
        <div class="pulling-up">
          <p v-show="pullingUpFlag && !all">正在加载更多数据...</p>
          <p v-show="pullingUpFlag && all">没有更多数据了</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
/**
 * 使用组件注意事项:
 * 1. 触发上拉和下拉后会emit一个dowm和up事件,事件传入scroll对象,当父组件外部完成下拉或上拉动作,
 *    应当调用finishPullDown或finishPullUp事件
 *    示例如下:
 *    pullingDown (finish) {
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
 * 2. 调用this.finishPullUpLoad时,可以传入true/false, 传入true代表已经加载完毕全部数据, 默认false
 *    示例如下:
 *    pullingUp (finish) {
        window.setTimeout(() => {
          // 可以传入true/false, 传入true代表已经加载完毕全部数据
          finish(true);
        }, 2000);
      }
 */
import BScroll from 'better-scroll';

export default {
  name: 'brand',
  data () {
    return {
      scroll: null,
      pullingDownFlag: false,
      pullingUpFlag: false,
      all: false
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
    },
    pullDownRefreshObj: {
      type: Object,
      default: function () {
        return {
          threshold: 50,
          stop: 20
        };
      }
    },
    pullUpLoadObj: {
      type: Object,
      default: function () {
        return {
          threshold: -50
        };
      }
    }
  },
  components: {
    BScroll
  },
  mounted () {
    this.init();
    this.pullDownRefreshMethod();
    this.pullUpLoadMethod();
  },
  destroyed () {
    this.scroll && this.scroll.destroy();
  },
  methods: {
    init () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        probeType: 3,
        click: true,
        dblclick: true,
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj
      });
    },
    // 下拉
    pullDownRefreshMethod () {
      this.scroll.on('pullingDown', () => {
        this.startPullingDown();
        this.$emit('down', this.finishPullingDown);
      });
    },
    // 上拉
    pullUpLoadMethod () {
      this.scroll.on('pullingUp', () => {
        this.startPullingUp();
        // 调用this.finishPullUpLoad时,可以传入true/false, 传入true代表已经加载完毕全部数据
        this.$emit('up', this.finishPullUpLoad);
      });
    },
    // 开始下拉
    startPullingDown () {
      this.pullingDownFlag = true;
    },
    // 开始上拉
    startPullingUp () {
      this.pullingUpFlag = true;
    },
    // 完成下拉动作
    finishPullingDown () {
      this.scroll.finishPullDown();
      this.pullingDownFlag = false;
    },
    // 完成上拉动作
    finishPullUpLoad (isAll = false) {
      this.scroll.finishPullUp();
      this.pullingUpFlag = false;
      this.all = isAll;
    }
  }
}
</script>

<style lang="less" scoped>
.innersect-wrapper {
  overflow-y: scroll;
  .pulling-down {
    width: 100%;
    min-height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
  .pulling-up {
    min-height: 20px;
    text-align: center;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
