<template>
  <div id="app">
    <NavigationBar/>
  </div>
</template>

<script>
import NavigationBar from './components/Navigation/NavigationBar'

export default {
  name: 'App',
  components: {
    NavigationBar
      }
}
</script>


<style>


@import url('https://fonts.googleapis.com/css?family=Poppins');
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
</style>
