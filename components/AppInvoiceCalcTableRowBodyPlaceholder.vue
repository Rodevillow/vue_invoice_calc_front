<template>
  <div class="invoice-calc__table__row">
    <div class="invoice-calc__table__row__cell justify-content-center">
      <input type="checkbox" class="d-block w-100" />
    </div>
    <div class="invoice-calc__table__row__cell">---</div>
    <!-- <div class="invoice-calc__table__row__cell">---</div> -->
    <div class="invoice-calc__table__row__cell">---</div>
    <div class="invoice-calc__table__row__cell">---</div>
  </div>
</template>

<style lang="scss" scoped>
.invoice-calc__table__row {
  display: grid;
  grid-template-columns: 50px 1fr 50px 100px;
  padding: 20px 10px;
  margin-bottom: 10px;
  border-radius: 7px;

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
