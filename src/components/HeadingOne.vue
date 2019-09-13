<template>
  <p class="text-green-500">{{text}}</p>
</template>
<script>
export default {
  name: "HeadingOne",
  props: {
    text: String
  }
};
</script>
<style scoped>
@import "../assets/tailwind.css";
</style>