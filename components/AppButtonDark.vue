<template>
  <button class="btn btn-dark" :disabled="disabled"><slot /></button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  font-family: "Bebas Neue", cursive;
  border: none;
  padding: 0px 20px;
  font-size: 20px;
  border-radius: 7px;
  letter-spacing: 4px;
  outline: none;
  height: 60px;
}
</style>
