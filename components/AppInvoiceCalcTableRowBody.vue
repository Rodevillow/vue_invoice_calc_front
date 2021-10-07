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
    <div class="invoice-calc__table__row__cell cell--name">
      {{ productData.title }}
    </div>
    <!-- <div class="invoice-calc__table__row__cell cell--price">
      ${{ productData.price }}
    </div> -->
    <div class="invoice-calc__table__row__cell cell--quantity">
      {{ productData.quantity }}
    </div>
    <div class="invoice-calc__table__row__cell cell--price-total">
      ${{ productData.price }}
      <br />
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
  grid-template-columns: 50px 1fr 50px 100px;
  padding: 20px 10px;
  margin-bottom: 10px;
  border-radius: 7px;

  &:nth-child(even) {
    background-color: #76532e38;
  }

  &:nth-child(odd) {
    background-color: #4caf500d;
  }

  &__cell {
    min-height: 40px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px;

    &.cell--name {
      padding: 20px;
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
      font-family: "Bebas Neue", cursive;
    }

    &.cell--price-total {
      padding: 5px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Bebas Neue", cursive;
    }
  }
}
</style>
