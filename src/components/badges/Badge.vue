<template>
  <div aria-label="badge" class="font-body text-sm bg-green w-32 rounded-full py-1 text-center">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Badge",
  props: {
    success: Boolean,
    warning: Boolean
  }
};
</script>