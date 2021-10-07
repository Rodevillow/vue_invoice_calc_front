<template>
  <div class="invoice-calc__table">
    <AppInvoiceCalcTableRowHeader
      :checkedIds="checkedIds"
      @checked-all="handleCheckedAll"
    />
    <b-overlay :show="this.getIsLoad">
      <AppInvoiceCalcTableRowBodyPlaceholder v-if="getProducts.length === 0" />
      <AppInvoiceCalcTableRowBodyPlaceholder v-if="getProducts.length === 0" />
      <AppInvoiceCalcTableRowBodyPlaceholder v-if="getProducts.length === 0" />
      <AppInvoiceCalcTableRowBodyPlaceholder v-if="getProducts.length === 0" />
      <AppInvoiceCalcTableRowBodyPlaceholder v-if="getProducts.length === 0" />

      <AppInvoiceCalcTableRowBody
        v-for="product in getProducts"
        :productData="product"
        :key="product._id"
        :checkedIds="checkedIds"
        @checked="handleChecked"
      />
    </b-overlay>
    <AppInvoiceCalcTableRowFooter
      :checkedIds="checkedIds"
      @click-to-delete="handleClickToDelete"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  INVOICE_CALC_NAMESPACE_PREFIX,
  DO_REMOVE_PRODUCTS,
  DO_LOAD_PRODUCTS
} from "@/store/invoice_calc/index";

import AppInvoiceCalcTableRowHeader from "@/components/AppInvoiceCalcTableRowHeader";
import AppInvoiceCalcTableRowBody from "@/components/AppInvoiceCalcTableRowBody";
import AppInvoiceCalcTableRowBodyPlaceholder from "@/components/AppInvoiceCalcTableRowBodyPlaceholder";

export default {
  data() {
    return {
      checkedIds: []
    };
  },
  computed: {
    ...mapGetters({
      getProducts: INVOICE_CALC_NAMESPACE_PREFIX + "getProducts",
      getIsLoad: INVOICE_CALC_NAMESPACE_PREFIX + "getIsLoad"
    })
  },
  components: {
    AppInvoiceCalcTableRowHeader,
    AppInvoiceCalcTableRowBody,
    AppInvoiceCalcTableRowBodyPlaceholder
  },
  methods: {
    ...mapActions({
      doRemoveProducts: INVOICE_CALC_NAMESPACE_PREFIX + DO_REMOVE_PRODUCTS,
      doLoadProducts: INVOICE_CALC_NAMESPACE_PREFIX + DO_LOAD_PRODUCTS
    }),
    handleChecked(_id) {
      if (this.checkedIds.find(x => x === _id)) {
        this.checkedIds = this.checkedIds.filter(x => x !== _id);
      } else {
        this.checkedIds.push(_id);
      }
    },
    handleCheckedAll(ids) {
      this.checkedIds = ids;
    },
    async handleClickToDelete() {
      await this.doRemoveProducts(this.checkedIds);
      this.checkedIds = [];
      await this.doLoadProducts();
    }
  }
};
</script>

<style lang="scss" scoped>
.invoice-calc__table {
  border: 1px solid #333c3f;
}
</style>
