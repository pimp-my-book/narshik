<template>
  <p class="text-3xl font-display">{{text}}</p>
</template>
<script>
export default {
  name: "DisplayLarge",
  props: {
    text: String
  }
};
</script>
<style>
@import "../../assets/tailwind.css";
</style>