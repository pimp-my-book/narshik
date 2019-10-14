<template>
  <div class="fixed top-0 right-0 bottom-0 left-0 flex justify-center align-center">
    <div class="bg-white flex flex-col">
      <!-- -->

      <!-- Header -->
      <header class="p-5 felx">
        <slot name="header">
          <span>&times;</span>
        </slot>
      </header>
      <!--End of header -->

      <!-- Body -->
      <slot name="body"></slot>
      <!--end of body -->

      <!-- footer-->
      <slot name="footer"></slot>
      <!-- end of footer-->
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};

//https://alligator.io/vuejs/vue-modal-component/
</script>
<style scoped>
@import "../../assets/tailwind.css";
</style>