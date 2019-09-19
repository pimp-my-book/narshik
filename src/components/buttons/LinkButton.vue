<template>
  <p class="font-body mr-4 hover:text-green">
    <a :href="href" :class="textColor" class="no-underline hover:text-green">{{text}}</a>
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