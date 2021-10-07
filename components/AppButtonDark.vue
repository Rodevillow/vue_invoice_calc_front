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
  border: 1px solid #333c3f;
  border-radius: 0;
  outline: none;

  &:disabled {
    border: 1px solid #333c3f;
  }
}
</style>
