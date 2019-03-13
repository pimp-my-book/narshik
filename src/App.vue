<template>
  <div id="app">
    <NavigationBar/>
    <SideNavBar/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from './components/Navigation/NavigationBar'
import SideNavBar from './components/Navigation/SideNavBar'

export default {
  name: 'App',
  components: {
    NavigationBar,
    SideNavBar
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
  color: #2c3e50;

}
</style>
