<template>
  <div id="app">
    <!-- <Header></Header> -->
    <router-view></router-view>
    
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
      Header,
      Footer
    }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height:100%;
}
#app {
    height:100%;
    display:flex;
    flex-direction:column;
    background-color: #f5f5f5;
}
a{
  text-decoration: none;
}
</style>
