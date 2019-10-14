<template>
  <div class="fixed top-0 right-0 bottom-0 left-0 flex justify-center align-center">
    <div>

      <!-- -->

      <!-- Header -->
 <slot name="header"></slot>
      <!--End of header -->
     
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal"
};

//https://alligator.io/vuejs/vue-modal-component/
</script>
<style scoped>
@import "../../assets/tailwind.css";
</style>