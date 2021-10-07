<template>
  <div class="invoice-calc__table__row">
    <div class="invoice-calc__table__row__cell justify-content-center">
      <input
        type="checkbox"
        class="d-block w-100"
        @click="handleClickCheckbox()"
        :checked="isChecked"
      />
    </div>
    <div class="invoice-calc__table__row__cell">{{ productData.title }}</div>
    <div class="invoice-calc__table__row__cell">${{ productData.price }}</div>
    <div class="invoice-calc__table__row__cell">{{ productData.quantity }}</div>
    <div class="invoice-calc__table__row__cell">
      ${{ productData.price * productData.quantity }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productData: {
      type: Object,
      require: true
    },
    checkedIds: {
      type: Array,
      require: true
    }
  },
  computed: {
    isChecked() {
      return this.checkedIds.find(x => x === this.productData._id);
    }
  },
  methods: {
    handleClickCheckbox() {
      this.$emit("checked", this.productData._id);
    }
  }
};
</script>

<style lang="scss" scoped>
.invoice-calc__table__row {
  display: grid;
  grid-template-columns: 50px 1fr 100px 80px 100px;

  &:nth-child(even) {
    background-color: gainsboro;
  }

  &:nth-child(odd) {
    background-color: lightgray;
  }

  &__cell {
    min-height: 40px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px;
  }
}
</style>
