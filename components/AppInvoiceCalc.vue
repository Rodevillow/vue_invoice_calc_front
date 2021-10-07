<template>
  <div class="invoice-calc">
    <AppH1>Vue Invoice Calc</AppH1>
    <AppInvoiceCalcPanel />
    <AppInvoiceCalcTable />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {
  INVOICE_CALC_NAMESPACE_PREFIX,
  DO_LOAD_PRODUCTS
} from "@/store/invoice_calc/index";

import AppH1 from "@/components/AppH1";
import AppInvoiceCalcPanel from "@/components/AppInvoiceCalcPanel";
import AppInvoiceCalcTable from "@/components/AppInvoiceCalcTable";

export default {
  async mounted() {
    // Init data from server
    this.doLoadProducts();
  },
  components: {
    AppH1,
    AppInvoiceCalcPanel,
    AppInvoiceCalcTable
  },
  methods: {
    ...mapActions({
      doLoadProducts: INVOICE_CALC_NAMESPACE_PREFIX + DO_LOAD_PRODUCTS
    })
  }
};
</script>

<style lang="scss" scoped>
.invoice-calc {
  // code...
}
</style>
