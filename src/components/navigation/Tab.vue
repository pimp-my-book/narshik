<template>
  <b-tabs>
    <b-tab-item class="font-body" label="hello">hello</b-tab-item>
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
  },
  props: {
    numOfTabs: Number,
    tabHeadingOne: String,
    tabHeadingTwo: String
  }
};
</script>
<style lang="scss" >
@import "../../assets/tailwind.css";
@import "~bulma/sass/utilities/_all";

@import "~bulma";
@import "~buefy/src/scss/buefy";

.tabs li.is-active a {
  border-bottom-color: #4eca5d;
  color: #4eca5d;
  border-bottom: 5px solid;
}

span {
  font-family: Poppins;
}
</style>