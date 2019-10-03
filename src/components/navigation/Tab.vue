<template>
  <b-tabs>
    <div v-if="numOfTabs = 2">
      <b-tab-item class="font-body" :label="tabHeadingOne">
        <slot name="tabOne"></slot>
      </b-tab-item>
      <b-tab-item class="font-body" :label="tabHeadingTwo">
        <slot name="tabTwo"></slot>
      </b-tab-item>
    </div>
    <div v-else>
      <b-tab-item class="font-body" :label="tabHeadingOne">
        <slot></slot>
      </b-tab-item>
    </div>
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

.tabs ul {
  border-bottom-color: none;
  border-bottom-style: none;
  border-bottom-width: none;
}
</style>