// PREFIX
export const INVOICE_CALC_NAMESPACE_PREFIX = "invoice_calc/";

// MUTATIONS TYPES
export const LOAD_PRODUCT = "loadProductMutation";
export const SET_IS_LOAD = "setIsLoadMutation";

// ACTIONS TYPES
export const DO_LOAD_PRODUCTS = "doLoadProductsAction";
export const DO_ADD_PRODUCT = "doAddProductAction";
export const DO_REMOVE_PRODUCTS = "doRemoveProductsAction";

export const state = () => ({
  isLoad: true,
  products: []
});

export const mutations = {
  [LOAD_PRODUCT](state, products) {
    state.products = products;
  },
  [SET_IS_LOAD](state, isLoad = false) {
    state.isLoad = isLoad;
  }
};

export const actions = {
  async [DO_LOAD_PRODUCTS]({ commit }) {
    let response = await this.$axios.get("products");
    commit(LOAD_PRODUCT, response.data.data);
    commit(SET_IS_LOAD, false);
  },
  async [DO_ADD_PRODUCT]({ commit }, product) {
    commit(SET_IS_LOAD, true);
    await this.$axios.post("products", {
      title: product.title,
      price: product.price,
      quantity: product.quantity
    });
  },
  async [DO_REMOVE_PRODUCTS]({ commit }, ids) {
    commit(SET_IS_LOAD, true);
    await this.$axios.delete("products" + "?ids=" + ids.join(","));
  }
};

export const getters = {
  getProducts: state => {
    return state.products;
  },
  getIsLoad: state => {
    return state.isLoad;
  }
};
