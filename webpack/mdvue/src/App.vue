<template>
  <div id="app">
    <router-link to="/index">Index</router-link>
    <div class="mdui-container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Index from './views/Index'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
