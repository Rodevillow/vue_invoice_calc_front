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
    <div class="invoice-calc__table__row__cell cell--name">Product name</div>
    <!-- <div class="invoice-calc__table__row__cell cell--price">Price</div> -->
    <div class="invoice-calc__table__row__cell cell--quantity">Qty</div>
    <div class="invoice-calc__table__row__cell cell--price-total">
      Price <br />
      Sum
    </div>
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
  grid-template-columns: 50px 1fr 50px 100px;
  background-color: #de881e63;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 7px;

  &__cell {
    min-height: 40px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 4px;
    font-size: 20px;

    &.cell--name {
      padding: 20px;
      @media screen and (max-width: 500px) {
        grid-column: 2 / 5;
      }
    }

    &.cell--price {
      padding: 5px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.cell--quantity {
      padding: 5px;
      text-align: center;
      font-size: 20px;
      color: #98632b;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 500px) {
        grid-column: 3 / 3;
      }
    }

    &.cell--price-total {
      padding: 5px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
