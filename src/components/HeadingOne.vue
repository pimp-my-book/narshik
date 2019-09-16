<template>
  <p class="text-green">{{text}}</p>
</template>
<script>
export default {
  name: "HeadingOne",
  props: {
    text: String
  }
};
</script>
<style>
@import "../assets/tailwind.css";
</style>
