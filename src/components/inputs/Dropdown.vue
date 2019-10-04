<template>
  <select class="bg-grey-lighter rounded-px px-4 py-1" aria-label="dropdown">
    <slot></slot>
  </select>
</template>
<script>
export default {
  name: "Dropdown"
};
</script>
<style >
@import "../../assets/tailwind.css";
</style>