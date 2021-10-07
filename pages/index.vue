<template>
  <div class="home row align-items-center">
    <AppInvoiceCalc
      class="col-12 col-sm-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2"
    />
  </div>
</template>

<script>
import AppInvoiceCalc from "@/components/AppInvoiceCalc";

export default {
  components: {
    AppInvoiceCalc
  }
};
</script>

<style lang="scss" scoped>
.home {
  // code...
}
</style>
