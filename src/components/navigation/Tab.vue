<template>
  <b-tabs>
    <b-tab-item label="hello">hello</b-tab-item>
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