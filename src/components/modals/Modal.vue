<template>
  <div class="fixed top-0 right-0 bottom-0 left-0 flex justify-center align-center bg-white">
    <div class="bg-white flex flex-col rounded shadow-lg h-350 w-400 border border-green">
      <!-- -->

      <!-- Header -->
      <header class="flex justify-between p-2">
        <slot name="header"></slot>
        <span @click="close" class="cursor-pointer pr-2">&times;</span>
      </header>
      <!--End of header -->

      <!-- Body -->
      <section class="relative p-3">
        <slot name="body"></slot>
        <!--end of body -->
      </section>
      <!-- footer-->
      <footer class="p-5 flex mt-32">
        <slot name="footer"></slot>
      </footer>
      <!-- end of footer-->
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  methods: {
    close(event) {
      this.$emit("close");
    }
  }
};

//https://alligator.io/vuejs/vue-modal-component/
</script>
<style >
@import "../../assets/tailwind.css";
</style>