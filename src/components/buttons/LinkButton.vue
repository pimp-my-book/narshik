<template>
  <p class="text-white font-body mr-4 hover:text-green">
    <a href="http://app.gogoa.co.za/login" class="no-underline text-white hover:text-green">{{text}}</a>
  </p>
</template>
<script>
export default {
  name: "LinkButton",
  props: {
    text: String
  }
};
</script>
<style>
@import "../../assets/tailwind.css";
</style>