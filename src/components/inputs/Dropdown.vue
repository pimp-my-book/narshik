<template>
  <select class="font-body bg-grey-lighter rounded-px px-5 py-1" aria-label="dropdown">
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