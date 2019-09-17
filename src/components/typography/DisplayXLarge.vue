<template>
  <p class="text-5xl font-display">{{text}}</p>
</template>
<script>
export default {
  name: "DisplayXLarge",
  props: {
    text: String
  }
};
</script>
<style>
@import "../../assets/tailwind.css";
</style>
