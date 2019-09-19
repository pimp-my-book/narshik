<template>
  <p :class="textColor" class="font-body mr-4 hover:text-green">
    <a :href="href" class="no-underline text-white hover:text-green">{{text}}</a>
  </p>
</template>
<script>
export default {
  name: "LinkButton",
  props: {
    text: String,
    href: String,
    textColor: String
  }
};
</script>
<style>
@import "../../assets/tailwind.css";
</style>