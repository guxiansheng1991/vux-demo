<template>
  <div class="hello">
    <h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1>
    <h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1>
    <h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1>
    <h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1>
    <h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1><h1>哈哈哈哈</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    /** ajax 测试 */
    this.$http.get('http://47.92.31.5:8081/innersect-api/newsApi/list?type=1&language=0').then(({data}) => {
      console.log(data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
