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
      <span class="cell--price">${{ productData.price }}</span>
      <span class="cell--total">
        ${{ productData.price * productData.quantity }}
      </span>
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
    background-color: $table_row_even;
  }

  &:nth-child(odd) {
    background-color: $table_row_odd;
  }

  &__cell {
    min-height: 40px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px;

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
      color: $accent;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Bebas Neue", cursive;
      @media screen and (max-width: 500px) {
        grid-column: 3 / 3;
      }
    }

    &.cell--price-total {
      padding: 5px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: "Bebas Neue", cursive;
    }

    .cell--price {
      font-size: 18px;
      color: $accent;
    }

    .cell--total {
      font-size: 20px;
    }

    @media screen and (max-width: 500px) {
      .cell--price {
        font-size: 22px;
      }
      .cell--total {
        font-size: 28px;
      }
    }
  }
}
</style>
