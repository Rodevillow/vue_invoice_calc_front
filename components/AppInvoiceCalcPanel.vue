<template>
  <div class="invoice-calc__panel">
    <AppInput
      inputType="text"
      placeholder="Product name"
      :value="form.title"
      @input="handleInputProduct"
    />
    <AppInput
      inputType="number"
      placeholder="Price"
      :value="form.price"
      @input="handleInputPrice"
    />
    <AppInput
      inputType="number"
      placeholder="Qty"
      :value="form.quantity"
      @input="handleInputQuantity"
    />
    <AppButtonDark
      @click.native="handleSubmit"
      :disabled="!(this.form.title && this.form.price && this.form.quantity)"
      >Add</AppButtonDark
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {
  INVOICE_CALC_NAMESPACE_PREFIX,
  DO_LOAD_PRODUCTS,
  DO_ADD_PRODUCT
} from "@/store/invoice_calc/index";

import AppInput from "@/components/AppInput";
import AppButtonDark from "@/components/AppButtonDark";

export default {
  data() {
    return {
      form: {
        title: null,
        price: null,
        quantity: null
      }
    };
  },
  components: {
    AppInput,
    AppButtonDark
  },
  methods: {
    ...mapActions({
      doLoadProducts: INVOICE_CALC_NAMESPACE_PREFIX + DO_LOAD_PRODUCTS,
      doAddProduct: INVOICE_CALC_NAMESPACE_PREFIX + DO_ADD_PRODUCT
    }),
    handleValue(value) {
      return value !== "" ? value : null;
    },
    handleInputProduct(value) {
      this.form.title = this.handleValue(value);
    },
    handleInputPrice(value) {
      this.form.price = this.handleValue(value);
    },
    handleInputQuantity(value) {
      this.form.quantity = this.handleValue(value);
    },
    async handleSubmit() {
      if (this.form.title && this.form.price && this.form.quantity) {
        await this.doAddProduct(this.form);
        this.cleanForm();
        await this.doLoadProducts();
      }
    },
    cleanForm() {
      this.form.title = null;
      this.form.price = null;
      this.form.quantity = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.invoice-calc__panel {
  display: grid;
  grid-template-columns: 2fr 80px 80px 80px;
}
</style>
