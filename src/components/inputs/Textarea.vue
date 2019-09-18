<template>
  <textarea
    class="bg-grey-lighter py-10 px-10 rounded-px focus:outline-none focus:bg-white border-gray-500"
    type="text"
    :placeholder="placeholder"
    aria-label="textarea field"
    @input="handleInput"
  />
</template>
<script>
export default {
  name: "Textarea",
  props: {
    placeholder: String
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>
<style>
@import "../../assets/tailwind.css";
</style>