<template>
  <div id="app">
    <img src="https://www.pfsgroup.es/wp-content/uploads/2018/09/Logo-PFS_RGB_web-300.png">
    <br />
    <br />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
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
