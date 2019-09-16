<template>
  <p class="heading">{{text}}</p>
</template>
<script>
export default {
  name: "HeadingOne",
  props: {
    text: String
  }
};
</script>
<style lang="postcss">
.heading {
  @apply text-green;
}
</style>