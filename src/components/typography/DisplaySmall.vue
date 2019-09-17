<template>
  <p class="text-xl font-body">{{text}}</p>
</template>
<script>
export default {
  name: "DisplaySmall",
  props: {
    text: String
  }
};
</script>
<style>
@import "../../assets/tailwind.css";
</style>