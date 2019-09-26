<template>
  <input
    class="bg-grey-lighter rounded-px py-2 px-4 border-gray-500 focus:outline-none focus:bg-white"
    type="text"
    :placeholder="placeholder"
    aria-label="input field"
    @input="handleInput"
  />
</template>
<script>
export default {
  name: "Input",
  props: {
    placeholder: String
  },
  data() {
    return {
      newValue: ""
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit("input", value);
      }
    }
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