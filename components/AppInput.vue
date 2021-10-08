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
  padding: 0px 20px;
  height: 60px;
  border: none;
  border-radius: 7px;
  outline: none;
  background-color: $dark_bg;
  color: $white;

  &::placeholder {
    color: $placeholder;
  }
}
</style>
