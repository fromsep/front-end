<template>
  <div id="app">
    <span>
      <router-link to="/index">index</router-link>
    </span>
    <span>
      <router-link to="/hello-world">HelloWorld</router-link>
    </span>
    <span>
      <router-link to="/test">Test</router-link>
    </span>

    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Index from './components/Index.vue';
import Test from './components/Test.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Index,
    Test
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
span {
  margin-right: 10px;
}
</style>
