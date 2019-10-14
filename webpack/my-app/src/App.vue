<template>
  <div id="app">
    <router-link to="/index">index</router-link> <br>
    <router-link to="/hello-world">HelloWorld</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Index from './components/Index.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Index,
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
