import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

import image1 from "../assets/images/6123150777.webp";
import image2 from "../assets/images/6126039472.webp";
import image3 from "../assets/images/6126040354.webp";
import image4 from "../assets/images/6128597660.webp";
import image5 from "../assets/images/6134992334.webp";
import image6 from "../assets/images/6136170572.webp";
import image7 from "../assets/images/6136172483.webp";
import image8 from "../assets/images/6140906765.webp";
import image9 from "../assets/images/6142673815.webp";
import image10 from "../assets/images/6142681673.webp";
import image11 from "../assets/images/6142683276.webp";
import image12 from "../assets/images/6148226736.webp";

const imagePaths = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    loading: false,
    products: [],
    basket: [],
  }),
  getters: {
    getProducts: (state) => state.products,
    getFavorites: (state) => state.products.filter((product) => product.isFavorite),
    getTotalPrice: (state) =>
      state.basket
        .map((product) => product.price * product.quantity)
        .reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        ),
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    loadProductsSt(state, payload) {
      state.products = payload;
    },
    removeProductFromBasketSt(state, payload) {
      state.basket = state.basket.filter(
        (product) => product.id !== payload.id
      );
    },
    updateQuantitySt(state, payload) {
      const indexProducts = state.products.map((product) => product.id).indexOf(payload.id);
      console.log(indexProducts);
      state.products = state.products.map((product) => {
        if (product.id === payload.id) {
          Vue.set(product, 'quantity', Number(payload.quantity))
          return product;
        }
        return product;
      });
    },
    putOrPutAwayInBasket(state, payload) {
      if (!state.basket.find((product) => product.id === payload.id)) {
        console.log(payload);
        state.basket.push(payload);
      } else {
        state.basket = state.basket.filter(
          (product) => product.id !== payload.id
        );
      }
    },
    addOrRemoveProductFavoriteList(state, productId) {
      state.products = state.products.map((product) => {
        if (product.id === productId) {
          return { ...product, isFavorite: !product.isFavorite };
        }
        return product;
      });
    },
  },
  actions: {
    async loadProducts({ commit }) {
      commit("setLoading", true);
      try {
        const { data } = await axios.get(
          "https://random-data-api.com/api/food/random_food?size=12"
        );
        const product = data.map((product, index) => ({
          ...product,
          price: Math.floor(Math.random() * 300),
          image: imagePaths[index],
          quantity: 1,
          isFavorite: false,
        }));
        commit("loadProductsSt", product);
      } catch (e) {
        console.log(e);
        throw e;
      }
      commit("setLoading", true);
    },
  },
});
