<template>
  <select aria-label="dropdown">
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