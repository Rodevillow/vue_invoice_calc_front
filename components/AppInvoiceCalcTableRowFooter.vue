<template>
  <div class="invoice-calc__table__row">
    <div class="invoice-calc__table__row__cell">
      <AppButtonDark @click.native="handleClick" :disabled="isDisabled">
        Delete
      </AppButtonDark>
    </div>
    <div class="invoice-calc__table__row__cell">Total: $ 412402</div>
  </div>
</template>

<script>
import AppButtonDark from "@/components/AppButtonDark";

export default {
  props: {
    checkedIds: {
      type: Array,
      require: true
    }
  },
  components: {
    AppButtonDark
  },
  computed: {
    isDisabled() {
      return this.checkedIds.length === 0;
    }
  },
  methods: {
    handleClick() {
      this.$emit("click-to-delete");
    }
  }
};
</script>

<style lang="scss" scoped>
.invoice-calc__table__row {
  display: flex;
  justify-content: space-between;

  &__cell {
    min-height: 40px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px;
    font-weight: bold;
  }
}
</style>
