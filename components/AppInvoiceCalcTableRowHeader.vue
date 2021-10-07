<template>
  <div class="invoice-calc__table__row">
    <div class="invoice-calc__table__row__cell justify-content-center">
      <input
        v-if="getProducts.length > 0"
        type="checkbox"
        class="d-block w-100"
        @click="handleClickCheckbox"
        :checked="isChecked"
      />
    </div>
    <div class="invoice-calc__table__row__cell">Product name</div>
    <div class="invoice-calc__table__row__cell">Price</div>
    <div class="invoice-calc__table__row__cell">Qta</div>
    <div class="invoice-calc__table__row__cell">Sum</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { INVOICE_CALC_NAMESPACE_PREFIX } from "@/store/invoice_calc/index";

export default {
  props: {
    checkedIds: {
      type: Array,
      require: true
    }
  },
  computed: {
    ...mapGetters({
      getProducts: INVOICE_CALC_NAMESPACE_PREFIX + "getProducts"
    }),
    isChecked() {
      return this.getProducts.length === this.checkedIds.length;
    }
  },
  methods: {
    handleClickCheckbox() {
      let result = [];
      if (!this.isChecked) {
        result = this.getProducts.map(x => x._id);
      }
      this.$emit("checked-all", result);
    }
  }
};
</script>

<style lang="scss" scoped>
.invoice-calc__table__row {
  display: grid;
  grid-template-columns: 50px 1fr 100px 80px 100px;
  background-color: darkgray;

  &__cell {
    min-height: 40px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px;
  }
}
</style>
