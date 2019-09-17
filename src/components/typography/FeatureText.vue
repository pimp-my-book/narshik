<template>
  <p :class="[small ? 'text-sm font-body' : 'text-lg font-body' ]">{{text}}</p>
</template>
<script>
export default {
  name: "FeatureText",
  props: {
    text: String,
    small: Boolean,
    url: String
  }
};
</script>
<style>
@import "../../assets/tailwind.css";
</style>