<template>
  <div class="invoice-calc__panel">
    <AppInput
      class="invoice-calc__panel__field--name"
      inputType="text"
      placeholder="PRODUCT NAME"
      :value="form.title"
      @input="handleInputProduct"
    />
    <AppInput
      class="invoice-calc__panel__field--price"
      inputType="number"
      placeholder="PRICE"
      :value="form.price"
      @input="handleInputPrice"
    />
    <AppInput
      class="invoice-calc__panel__field--quantity"
      inputType="number"
      placeholder="QTY"
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
  grid-template-columns: 1fr 120px 80px 80px;
  grid-gap: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  &__field {
    &--name {
      padding: 20px;
      @media screen and (max-width: 768px) {
        grid-column: 1 / 5;
      }
    }
    &--price {
      padding: 5px;
      text-align: center;
      &::placeholder {
        text-align: center;
      }
      @media screen and (max-width: 768px) {
        grid-column: 1 / 3;
      }
    }
    &--quantity {
      padding: 5px;
      text-align: center;
      &::placeholder {
        text-align: center;
      }
    }
  }
}
</style>
