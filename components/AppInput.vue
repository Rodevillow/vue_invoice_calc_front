<template>
  <input
    :type="inputType"
    :value="value"
    :placeholder="placeholder"
    @input="handleInput"
  />
</template>

<script>
export default {
  props: {
    inputType: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String | Number,
      default: ""
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 0 10px;
  border-radius: 0;
  border: 1px solid #333b3f;
  outline: none;
}
</style>
