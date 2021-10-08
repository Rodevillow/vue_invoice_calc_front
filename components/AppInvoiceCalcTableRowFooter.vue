<template>
  <div class="invoice-calc__table__row">
    <div class="invoice-calc__table__row__cell">
      <AppButtonDark @click.native="handleClick" :disabled="isDisabled">
        Delete
      </AppButtonDark>
    </div>
    <div class="invoice-calc__table__row__cell">Total: $ {{ getTotalSum }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { INVOICE_CALC_NAMESPACE_PREFIX } from "@/store/invoice_calc/index";

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
    ...mapGetters({
      getProducts: INVOICE_CALC_NAMESPACE_PREFIX + "getProducts"
    }),
    isDisabled() {
      return this.checkedIds.length === 0;
    },
    getTotalSum() {
      let total = 0;

      this.getProducts.forEach(x => {
        total = total + x.price * x.quantity;
      });

      return total;
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
    padding: 10px 0px;
    font-weight: bold;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 4px;
    color: $accent;
    font-size: 20px;
  }
}
</style>
