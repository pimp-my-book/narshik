<template>
  <b-tabs>
    <b-tab-item class="text-green" label="hello">hello</b-tab-item>
  </b-tabs>
</template>
<script>
import Vue from "vue";
import { Tabs } from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Tabs);
export default {
  name: "Tab",
  components: {
    Tabs
  }
};
</script>
<style lang="scss">
@import "~bulma/sass/utilities/_all";

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>